import AppLayout from "@/layouts/app-layout";
import { useState } from "react";
import { type BreadcrumbItem } from "@/types";
import { FaFilter, FaPlus } from "react-icons/fa";
import ActionDropdown from "@/components/posting/ActionDropdown";
import PostCard from "@/components/posting/PostCard";
import 'D:/Laravel/solar/resources/css/stylesaya.css'
import FilterDropdown from "@/components/posting/FilterDropdown";
import AddDropdown from "@/components/posting/AddDropdown";


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'View Posting',
        href: '/posting/view',
    },
];
interface User {
    name: string;
}

interface Posting {
    id_posting: number;
    description: string;
    created_at: string;
    category: string[];
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
}
export default function ViewPost({ postings, filters }: ViewPostProps) {
    const [activeAction, setActiveAction] =
        useState<"filter" | "add" | null>(null);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="container">
                <div className="container-header">
                    <h1 className="header-title">Daftar Postingan</h1>

                    <div className="header-tool">
                        <div className="tooltip-wrapper" data-tooltip="Filter Data">
                          <button
                              className="filter-button"
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


                {activeAction && (
                  <ActionDropdown
                    title={activeAction === "filter" ? "Filter Post" : "Tambah Post"} onClose={() => setActiveAction(null)}>
                    {activeAction === "filter" && (
                        <FilterDropdown
                            filters={filters}
                            onSubmitSuccess={() => setActiveAction(null)}/>
                    )}
                    {activeAction === "add" && (
                        <AddDropdown
                            onSubmitSuccess={() => setActiveAction(null)}/>
                    )}
                  </ActionDropdown>
                )}


                
                    <div className="container-content">
                    <div className="post-grid">
                        {postings.map((post) => (
                            <PostCard key={post.id_posting} post={post} />
                        ))}
                    </div>
                    </div>

            </div>
        </AppLayout>
    );
}


