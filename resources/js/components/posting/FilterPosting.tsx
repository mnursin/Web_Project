import { useForm } from "@inertiajs/react";

interface Props {
    filters: {
        category?: string;
        user?: string;
        search?: string;
    };
}

export default function FilterPost({ filters }: Props) {
    const { data, setData, get } = useForm({
        category: filters.category || "",
        user: filters.user || "",
        search: filters.search || "",
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();

        get(route("posting.view"), {
            preserveState: true,
            preserveScroll: true,
        });
    }

    return (
        <form onSubmit={submit} className="filter-form">
            <input
                placeholder="Search deskripsi..."
                value={data.search}
                onChange={(e) => setData("search", e.target.value)}
            />

            <input
                placeholder="User"
                value={data.user}
                onChange={(e) => setData("user", e.target.value)}
            />

            <select
                value={data.category}
                onChange={(e) => setData("category", e.target.value)}
            >
                <option value="">Semua Category</option>
                <option value="solar">Solar</option>
                <option value="iot">IoT</option>
                <option value="hardware">Hardware</option>
            </select>

            <button type="submit" className="btn-primary">
                Terapkan Filter
            </button>
        </form>
    );
}
