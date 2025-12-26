import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

interface Category {
    id: number | string
    name: string
}

interface FilterPostProps {
    categories: Category[]
    selected?: string
    onClose: () => void
    onApply: (category: string) => void
}

export default function FilterPost({ categories, selected, onClose, onApply }: FilterPostProps) {
    const [category, setCategory] = useState(selected || '')

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded w-96">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Filter Category</h2>
                    <button onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border rounded px-3 py-2 mb-4"
                >
                    <option value="">Semua Category</option>
                    {categories.map(cat => (
                        <option key={cat.id} value={cat.name}>
                            {cat.name}
                        </option>
                    ))}
                </select>

                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 border rounded"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={() => onApply(category)}
                        className="px-4 py-2 bg-green-600 text-white rounded"
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    )
}
