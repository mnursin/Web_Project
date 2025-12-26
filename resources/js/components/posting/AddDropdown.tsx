import { useForm } from "@inertiajs/react";

interface Props {
    onSubmitSuccess?: () => void;
}

export default function AddDropdown({ onSubmitSuccess }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        description: "",
        category: "",
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();

        post(route("posting.store"), {
            onSuccess: () => onSubmitSuccess?.(),
        });
    }

    return (
        <form onSubmit={submit} className="dropdown-form">
            <textarea
                placeholder="Deskripsi posting"
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
            />

            <select
                value={data.category}
                onChange={(e) => setData("category", e.target.value)}
            >
                <option value="">Pilih kategori</option>
                <option value="iot">IoT</option>
                <option value="solar">Solar</option>
                <option value="hardware">Hardware</option>
            </select>

            <button type="submit" disabled={processing}>
                {processing ? "Menyimpan..." : "Simpan"}
            </button>

            {errors.description && (
                <p className="error">{errors.description}</p>
            )}
        </form>
    );
}
