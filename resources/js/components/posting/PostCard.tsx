interface User {
    name: string;
}

interface Posting {
    id_posting: number;
    description: string;
    created_at: string;
    category: string[] | string | null;
    user: User | null;
}

export default function PostCard({ post }: { post: Posting }) {
    return (
        <div className="card">
            <div className="card-header">
                Diposting oleh{" "}
                <strong>{post.user?.name ?? "Unknown"}</strong> pada{" "}
                {post.created_at
                    ? new Date(post.created_at).toLocaleString()
                    : "-"}
            </div>

            <div className="card-body">
                <p>
                    Deskripsi: <strong>{post.description ?? "-"}</strong>
                </p>

                <p>
                    {/* Category:{" "}
                    {Array.isArray(post.category)
                        ? post.category.join(", ")
                        : post.category ?? "-"} */}
                    Category : {(post.category)}    
                </p>
            </div>
        </div>
    );
}
