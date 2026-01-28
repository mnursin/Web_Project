// import

import { PlaceholderPattern } from "../ui/placeholder-pattern";

interface TimeFilter {
    type: "created_at" | "updated_at";
    range: "today" | "7days" | "30days" | "custom";
    from?: string;
    to?: string;
}

interface Props {
    value: TimeFilter;
    onChange: (value: TimeFilter) => void;
    type?: string;
}

export default function FilterTime({ value, onChange,type }: Props) {
    return (
        <div className="space-y-3">
            {/* FILTER TYPE */}
            <div className="filter_type">
                <label className="block text-sm font-medium mb-1">
                    Type
                </label>
                <select
                    className="input_form"
                    value={value.type}
                    onChange={(e) =>
                        onChange({ ...value, type: e.target.value as any })
                    }
                >
                    <option value="created_at">Tanggal dibuat</option>
                    <option value="updated_at">Tanggal diperbarui</option>
                </select>
            
            
            
                {
                    value.type!==null&&(
                    <div>
                        <label className="block text-sm font-medium mb-1">
                        Rentang waktu
                        </label>
                        <select
                            className="input_form"
                            value={value.range}
                            onChange={(e) =>
                            
                            onChange({ ...value, range: e.target.value as any })}>
                                <option value="today">Hari ini</option>
                                <option value="7days">7 hari terakhir</option>
                                <option value="30days">30 hari terakhir</option>
                                <option value="custom">Custom</option>

                        </select>
                    </div>
                        
                    )
                }
            </div>

            {/* CUSTOM RANGE */}
            {value.range === "custom"  && (
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <label className="text-xs">Dari</label>
                        <input
                            type="date"
                            className="input_form"
                            
                            value={value.from || ""}
                            onChange={(e) =>
                                onChange({ ...value, from: e.target.value })
                            }
                        />
                    </div>

                    <div>
                        <label className="text-xs">Sampai</label>
                        <input
                            type="date"
                            className="input_form"
                            value={value.to || ""}
                            onChange={(e) =>
                                onChange({ ...value, to: e.target.value })
                            }
                        />
                    </div>
                </div>
            )}
            
        </div>
    );
}
