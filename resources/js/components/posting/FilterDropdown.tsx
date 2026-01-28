import { useForm } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import ButtonCategory from "@/components/posting//buttonCategory";
import FilterTime from "@/components/posting//FilterTime";


interface Props {
    onSubmitSuccess?: () => void;
    categories: Categories[];
    onFilteredChange?: (value: boolean) => void; // 🔑
    onFilterSummaryChange?: (summary: string[]) => void;
}

interface Categories{
    id: number;
    category: string;
}

export default function FilterDropdown({ onSubmitSuccess,categories,onFilteredChange,onFilterSummaryChange, }: Props) {

    // const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    
 const [timeFilter, setTimeFilter] = useState({
        type: "created_at",
        range: "...",
        from: "",
        to: "",
    });
    

    const { data, setData, get, processing } = useForm({
        category_ids: [] as number[],
        date_from: "",
        date_to: "",
        date_type: "created_at",
        description: "",
        content: "",
    });

    useEffect(() => {
    const summary: string[] = [];

    if (data.category_ids.length > 0) {
        const names = categories
            .filter(c => data.category_ids.includes(c.id))
            .map(c => c.category)
            .join(", ");

        summary.push(`Category (${names})`);
    }

    if (data.description.trim() !== "") {
        summary.push("Description");
    }

    if (data.content.trim() !== "") {
        summary.push("Content");
    }

    if (timeFilter.range === "today"|| timeFilter.range ==="Hari ini") {
        summary.push("Date (Today)");
    }

    if (timeFilter.range === "7days") {
        summary.push("Date (Last 7 Days)");
    }

    if (timeFilter.range === "30days") {
        summary.push("Date (Last 30 Days)");
    }

    if (timeFilter.range === "custom") {
        summary.push(`Date (${timeFilter.from} → ${timeFilter.to})`);
    }

    onFilterSummaryChange?.(summary);
    onFilteredChange?.(summary.length > 0);
}, [data, timeFilter]);

    const isFiltered =
    data.category_ids.length > 0 ||
    data.description.trim() !== "" ||
    data.content.trim() !== "" ||
    data.date_from !== "" ||
    data.date_to !== "";


    function resetFilter() {
    setData({
        category_ids: [],
        date_from: "",
        date_to: "",
        date_type: "created_at",
        description: "",
        content: "",

    });
onFilteredChange?.(false); // 🔥 reset badge
}

useEffect(() => {
    onFilteredChange?.(isFiltered);
}, [isFiltered]);

    // 🔑 TARUH DI SINI
    useEffect(() => {



    const today = new Date();

    let fromDate = "";
    let toDate = "";

    if (timeFilter.range === "today") {
        const d = today.toISOString().split("T")[0];
        fromDate = d;
        toDate = d;
    }

    if (timeFilter.range === "7days") {
        const from = new Date();
        from.setDate(today.getDate() - 7);

        fromDate = from.toISOString().split("T")[0];
        toDate = today.toISOString().split("T")[0];
    }

    if (timeFilter.range === "30days") {
        const from = new Date();
        from.setDate(today.getDate() - 30);

        fromDate = from.toISOString().split("T")[0];
        toDate = today.toISOString().split("T")[0];
    }

    if (timeFilter.range === "custom") {
        fromDate = timeFilter.from;
        toDate = timeFilter.to;
    }

    setData("date_type", timeFilter.type);
    setData("date_from", fromDate);
    setData("date_to", toDate);


        // setData("date_type", timeFilter.type);
        // console.log("TIME FILTER:", timeFilter);
        // if (timeFilter.range === "7days") {
        //     setData("date_from", "7days");
        //     setData("date_to", "");
        // }
    }, [timeFilter]);

    function submit(e: React.FormEvent) {
        e.preventDefault();

        console.log("FILTER DATA:", data);

        get(route("posting.index"), {
            preserveState: true,
            preserveScroll: true,
            onSuccess: (page) => { onSubmitSuccess?.()
        ,console.log("RESPONSE:", page.props);
    },
        });
    }



    return (
        <form onSubmit={submit} className="dropdown-form">
                <label htmlFor="desc" className="block text-lg font-large mb-1 ">Description </label>
                <input
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                    type="text"
                    placeholder="Masukkan deskripsi catatan"
                    className="input_form"
                />

                <label htmlFor="content" className="block text-lg font-large  ">Content</label>
                <input
                    value={data.content}
                    onChange={(e) => setData("content", e.target.value)}
                    type="text"
                    placeholder="Masukkan konten"
                    className="input_form"
                />

                <label htmlFor="creted_at" className="block text-lg font-large  ">Filter by Time </label>
                
                <FilterTime 
                    value={timeFilter}
                    onChange={setTimeFilter}
                    >
                </FilterTime>
                
                <ButtonCategory 
                categories={categories} 
                value={data.category_ids}
                onChange={(ids) => setData("category_ids", ids)}></ButtonCategory>   

                

                <button
                    type="button"
                    onClick={resetFilter}
                    className="reset-button"
                >
                    Reset Filter
                </button>
                
                
                
                
                <button 
                type="submit" 
                disabled={processing} 
                className="submit-button " >
                    Submit
                </button>    
           
        </form>
    );
}
