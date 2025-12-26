import { useForm } from "@inertiajs/react";
import 'D:/Laravel/solar/resources/css/stylesaya.css'


interface Props {
    onSubmitSuccess?: () => void;
    filters?: {
        search?: string;
        category?: string;
        user?: string;
    };
}

export default function FilterDropdown({ filters, onSubmitSuccess }: Props) {
    const { data, setData, get } = useForm({
        search: filters?.search ?? "",
        category: filters?.category ?? "",
        user: filters?.user ?? "",
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();

        get(route("posting.view"), {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => onSubmitSuccess?.(),
        });
    }

    return (
        // <div className="drop-down-action"> 
            <form onSubmit={submit} className="dropdown-form">
                <input
                    type="text"
                    placeholder="Cari deskripsi"
                    value={data.search}
                    onChange={(e) => setData("search", e.target.value)}
                />

                <input
                    type="text"
                    placeholder="User"
                    value={data.user}
                    onChange={(e) => setData("user", e.target.value)}
                />

                <select
                    value={data.category}
                    onChange={(e) => setData("category", e.target.value)}
                >
                    <option value="">Semua Kategori</option>
                    <option value="iot">IoT</option>
                    <option value="solar">Solar</option>
                    <option value="hardware">Hardware</option>
                </select>

                <button type="submit" className="btn-primary">
                    Terapkan Filter
                </button>
            </form>
        // </div>
    );
}
