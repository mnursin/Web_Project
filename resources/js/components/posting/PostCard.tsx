import { EllipsisVertical } from 'lucide-react';
import { useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

interface User {
    name: string;
}

interface Category {
    id: number;
    category: string;
}
interface Props {
    post: Posting;
    onClick?: () => void;
    onDelete: (post: Posting) => void;
    onEdit: (post: Posting) => void;
    onDetail: (post: Posting) => void;
}


interface Posting {
    id_posting: number;
    description: string;
    created_at: string;
    content: string;
    category: Category[] | string | null;
    user: User | null;
}

export default function PostCard({ post,onClick,onEdit,onDelete, onDetail  }:  Props ) {
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    // klik di luar → menu hilang
    useOutsideClick(menuRef, () => setOpenMenu(false));

    return (
        <div className="card" onClick={onClick}>


            {/* <EllipsisVertical className='ellipsis' onClick={onClick}/> */}

            {/* ===== ELLIPSIS ===== */}
            <div
                className="ellipsis-wrapper"
                onClick={(e) => {
                    e.stopPropagation(); // 🔑 PENTING
                    setOpenMenu(prev => !prev);
                }}
            >
                <EllipsisVertical className="ellipsis" />
            </div>


            {/* ===== DROPDOWN MENU ===== */}
            {openMenu && (
                <div
                    ref={menuRef}
                    className="card-menu"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className="menu-item"
                        onClick={() => {
                            // setOpenMenu(false);
                            // e.stopPropagation(); // penting
                            onEdit(post);
                        }}
                    >
                        ✏️ Edit
                    </button>

                    <button
                        className="menu-item danger"
                        // onClick={() => {
                        //     setOpenMenu(false);
                        //     onDelete?.();
                        // }}
                         onClick={(e) => {
                            e.stopPropagation(); // penting
                            onDelete(post);
                        }}
                    >
                        🗑 Hapus
                    </button>
                </div>
            )}

            <div className="card-header">
                Diposting oleh{" "}
                <strong>{post.user?.name ?? "Unknown"}</strong> pada{" "}
                {post.created_at
                    ? new Date(post.created_at).toLocaleString()
                    : "-"}
            </div>

            <div className="card-body">
                <p>Deskripsi: <strong>{post.description ?? "-"}</strong></p>
                
                
                {/* <p className="flex mr-2" >
                    Category :                  
                    <div className="flex flex-wrap gap-2 ml-2">
                    {post.categories.map((cat) => (
                        <span
                            key={cat.id}
                            // className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded"
                            >
                            {cat.category}
                        </span>
                    ))}
                </div>
                </p> */}

                {/* <p className="flex mr-2"> */}
                    <span className="font-medium mr-1">Category:</span>
                    <span>
                        {post.categories.map(cat => cat.category).join(", ")}
                    </span>
                {/* </p> */}

            
            
            
            </div>
        </div>
    );
}
