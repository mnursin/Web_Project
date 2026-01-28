import { useForm } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";

interface Categories{
    id: number;
    category: string;
}

interface Props {
    categories: Categories[];
        value: number[];
    onChange: (ids: number[]) => void;
}


export default function ButtonCategory({ categories, value, onChange }: Props) {

    function toggle(id: number) {
        if (value.includes(id)) {
            onChange(value.filter(v => v !== id));
        } else {
            onChange([...value, id]);
        }
        
    }

    return (
        <div className="mb-5">
            <label className="block text-lg font-medium mb-1">
                Category
            </label>

            <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        type="button"
                        onClick={() => toggle(cat.id)}
                        className={`px-3 py-1 rounded border transition
                            ${value.includes(cat.id)
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                    >
                        {cat.category}
                    </button>
                ))}
            </div>

            <small className="text-gray-500">
                Klik untuk memilih kategori.
            </small>
        </div>
    );
}
