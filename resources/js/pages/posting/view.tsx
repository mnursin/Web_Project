import AppLayout from "@/layouts/app-layout";
import { useState } from "react";
import { type BreadcrumbItem } from "@/types";
import { FaFilter, FaPlus } from "react-icons/fa";
import ActionDropdown from "@/components/posting/ActionDropdown";
import PostCard from "@/components/posting/PostCard";
import 'D:/Laravel/solar/resources/css/stylesaya.css'
import FilterDropdown from "@/components/posting/FilterDropdown";
import AddDropdown from "@/components/posting/AddDropdown";
import { router } from "@inertiajs/react";
import PostDetail from "@/components/posting/postDetail";


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'View Posting',
        href: '/posting/view',
    },
];
interface User {
    name: string;
}

interface Categories{
    id: number;
    categori:string;
}

interface Posting {
    id_posting: number;
    description: string;
    created_at: string;
    category: Categories[];
    user: User;
}
interface Filters {
    search?: string;
    category?: string;
    user?: string;
}
interface ViewPostProps {
    postings: Posting[];
    filters: Filters;
    categories: Categories[];
}
export default function ViewPost({ postings, filters, categories }: ViewPostProps) {
    const [activeAction, setActiveAction] = useState<"filter" | "add" | "edit" |"detail"| null>(null);
        const [isFiltered, setIsFiltered] = useState(false);
        const [filterSummary, setFilterSummary] = useState<string[]>([]);
        const [activePost, setActivePost] = useState<Posting | null>(null);


    /* ================= DELETE ================= */
    function handleDelete(post: Posting) {
        if (!confirm("Yakin hapus postingan ini?")) return;

        router.delete(route("posting.destroy", post.id_posting), {
            onSuccess: () => {
                setActivePost(null);
                setActiveAction(null);
            },
        });
    }

    /* ================= RESET FILTER ================= */
    function resetAllFilters() {
        setIsFiltered(false);
        setFilterSummary([]);

        router.get(route("posting.index"), {}, {
            preserveScroll: true,
            replace: true,
        });
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="container">
                <div className="container-header">
                    <h1 className="header-title">Daftar Postingan</h1>

                    <div className="header-tool">
                        <div className="tooltip-wrapper" data-tooltip="Filter Data">
                            <button
                                className={`filter-button ${isFiltered ? "active" : ""}`}
                                onClick={() => setActiveAction("filter")}
                            >
                                <FaFilter />
                                
                            </button>
                        </div>

                        <div className="tooltip-wrapper"data-tooltip="Add New Data">
                          <button
                              className="add-button"
                              onClick={() => setActiveAction("add")}
                              >
                              <FaPlus />
                          </button>
                          </div>
                    </div>
                </div>

                {/* Memunculkan dropdown / popup untuk tombol filter dan add posting */}
                {activeAction !== null && (
                    <ActionDropdown
                       title={
                            activeAction === "filter"
                                ? "Filter Post"
                                : activeAction === "add"
                                ? "Tambah Post"
                                : activeAction === "edit"
                                ? "Edit Post"
                                : "Detail Post"
                        }
                        onClose={() => {
                            setActiveAction(null);
                            setActivePost(null);
                        }}
                    >

                        {/* ===== FILTER ===== */}
                        {activeAction === "filter" && (
                            <FilterDropdown
                                filters={filters}
                                categories={categories}
                                onSubmitSuccess={() => setActiveAction(null)}
                                onFilteredChange={setIsFiltered}
                                onFilterSummaryChange={setFilterSummary}
                            />
                        )}

                        {/* ===== ADD ===== */}
                        {activeAction === "add" && (
                            <AddDropdown
                                categories={categories}
                                onSubmitSuccess={() => setActiveAction(null)}
                            />
                        )}

                         {/* EDIT */}
                        {activeAction === "edit" && activePost && (
                            <AddDropdown
                                mode="edit"
                                editingPost={activePost}
                                categories={categories}
                                onSubmitSuccess={() => {
                                    setActiveAction(null);
                                    setActivePost(null);
                                }}
                            />
                        )}

                        {/* DETAIL */}
                        {activeAction === "detail" && activePost && (
                            <PostDetail
                                post={activePost}
                                onDelete={() =>
                                    handleDelete(activePost)
                                }
                                onEdit={() =>
                                    setActiveAction("edit")
                                }
                            />
                        )}
                        

                    </ActionDropdown>
                )}
                    {/* {activePost && (
                    <ActionDropdown
                        title="Detail Postingan"
                        onClose={() => setActivePost(null)}
                    >
                        <PostDetail post={activePost} />
                    </ActionDropdown>
                    )} */}


                {/* Menampilkan tulisan jika terjadi filtrasi posting berdasarkan apa saja */}
                {/* {isFiltered && <span className="filter-badge">Filtered by</span>} */}
                


                {/* Menampilkan detail dari postingan ketika diklik */}
               
               
                



                {/* Menampilkan tulisan jika terjadi filtrasi posting berdasarkan apa saja */}
                {isFiltered && filterSummary.length > 0 && (
                    <div className="filtered-info">
                        <div className="filtered-text">
                            <strong>Filtered by:</strong> {filterSummary.join(", ")}
                        </div>

                        <button
                            className="reset-filter-inline"
                            onClick={resetAllFilters}
                        >
                            Reset ✕
                        </button>
                    </div>
                )}
                
                    <div className="container-content">
                        <div className="post-grid">
                            {postings.map((post) => (
                                <PostCard 
                                key={post.id_posting} 
                                post={post} 
                                onDelete={handleDelete}
                                onClick={()=> {
                                    setActiveAction("detail");
                                    setActivePost(post)}}
                                onEdit={()=> {
                                    setActivePost(post);
                                    setActiveAction("edit");
                                }}

                                />
                                
                            ))}
                        </div>
                        
                        
                    </div>

            </div>
        </AppLayout>
    );
}


