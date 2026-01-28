
interface Posting {
    description: string;
    content: string;
    created_at: string;
    user: {
        name: string;
    };
    categories: Array<{
        id: number;
        category: string;
    }>;
}

interface Props {
    post: Posting;
    onDelete: () => void;
}

    
export default function PostDetail({ post,onDelete }: Props) {
    return (
        <div className="post-detail">

            <div className="detail-header">
                <h2>{post.description}</h2>
                <p className="detail-meta">
                    By <strong>{post.user.name}</strong> •{" "}
                    {new Date(post.created_at).toLocaleDateString()}
                </p>
            </div>

            <div className="detail-categories">
                {post.categories.map(cat => (
                    <span key={cat.id} className="category-badge">
                        {cat.category}
                    </span>
                ))}
            </div>

            <div
                className="detail-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <button className="buttonDelete" 
                            onClick={(e) => {
                            e.stopPropagation(); // penting
                            onDelete(post);
                        }}>
                Delete
            </button>
        </div>
    );
}
