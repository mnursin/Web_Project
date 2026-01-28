import { useForm } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import ButtonCategory from "@/components/posting/buttonCategory";

interface Categories {
    id: number;
    category: string;
}
interface Posting {
    id_posting: number;
    description: string;
    content: string;
    created_at: string;
    user: { name: string };
    categories: { id: number; category: string }[];
}

interface Props {
    onSubmitSuccess?: () => void;
    categories: Categories[];
    mode?: "add" | "edit";
    editingPost?: Posting;
}

export default function AddDropdown({ onSubmitSuccess, categories, editingPost, mode }: Props) {
    const { data, setData, post, put, processing, errors } = useForm({
        description: "",
        content: "",
        category_ids: [] as number[],
    });
const quillRef = useRef<any>(null);
    const editorRef = useRef<HTMLDivElement>(null);
    const [editorReady, setEditorReady] = useState(false);


 function submit(e: React.FormEvent) {
    e.preventDefault();
    console.log("SUBMIT:", { mode, editingPost, data });
    
    if (mode === "edit" && editingPost) {
        console.log("Melakukan proses Submit edit");
        put(route("posting.update", editingPost.id_posting), {
            preserveScroll: true,
            onSuccess: () => {
                onSubmitSuccess?.();
            },
        });
    } else {
        post(route("posting.store"), {
            preserveScroll: true,
            onSuccess: () => {
                onSubmitSuccess?.();
            },
        });
    }
}


    useEffect(() => {
    const init = async () => {
        if (!editorRef.current || quillRef.current) return;

        const Quill = (await import("quill")).default;
        await import("quill/dist/quill.snow.css");

        const Size = Quill.import("attributors/style/size");
        Size.whitelist = ["10px","11px","12px","14px","16px","18px","24px"];
        Quill.register(Size, true);

        const quill = new Quill(editorRef.current, {
            theme: "snow",
            placeholder: "Tulis catatan di sini...",
            modules: {
                toolbar: [
                    [{ header: [1, 2, 3, 4, false] }],
                    [{ size: Size.whitelist }],
                    ["bold", "italic", "underline"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["image", "link"],
                    ["clean"],
                ],
            },
        });

        quill.on("text-change", () => {
            setData("content", quill.root.innerHTML);
        });

        quillRef.current = quill;
        setEditorReady(true); // 🔥 kunci
    };

    init();
}, []);


useEffect(() => {
    // console.log("EDIT EFFECT:", { mode, editingPost, quill: quillRef.current, editorReady });

    if (
        mode === "edit" &&
        editingPost &&
        editorReady &&
        quillRef.current
    ) {
        setData({
            description: editingPost.description,
            content: editingPost.content,
            category_ids: editingPost.categories.map(c => c.id),
        });

        quillRef.current.root.innerHTML = editingPost.content;
    }
}, [mode, editingPost, editorReady]);



    return (
        <form onSubmit={submit} className="dropdown-form">
            <label className="block text-lg mb-1">Description</label>
            <input
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
                className="input_form"
                placeholder="Masukkan deskripsi"
            />

            <ButtonCategory
                categories={categories}
                value={data.category_ids}
                onChange={(ids) => setData("category_ids", ids)}
            />

            <label className="block text-lg mt-4 mb-1">Content</label>
            <div ref={editorRef} className="content_text" style={{ minHeight: 300 }} />

            {errors.description && <p className="error">{errors.description}</p>}

            <button type="submit" disabled={processing} className="submit-button">
                Submit
            </button>
        </form>
    );
}
