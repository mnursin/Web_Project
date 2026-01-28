import { FaTimes } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

interface Props {
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    // categories: Categories[];
}

export default function ActionDropdown({ onClose, children,title }: Props) {
    const ref = useRef<HTMLDivElement | null>(null);
    
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

    useOutsideClick(ref, onClose);

    return (

        <div ref={ref} className="drop-down-action">
            
                <div  className="dropdown-header">
                    <h2 className="dropdown-title">{title}</h2>
                    <button onClick={onClose} className="close-button">
                        <FaTimes/>
                    </button>
                </div>
                <div className="dropdown-content"> {children}</div>
        </div>

    );
}
