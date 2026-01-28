interface Props {
    post: Posting;
    onClose: () => void;
    onDelete: () => void;
}

export default function PostDetailModal({ post, onClose, onDelete }: Props) {
    return (
        <div className="modal-overlay">
            <div className="modal-card">
                <h2>{post.description}</h2>

                <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="modal-footer">
                    <button className="delete-btn" onClick={onDelete}>
                        🗑 Delete
                    </button>
                    <button className="close-btn" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
