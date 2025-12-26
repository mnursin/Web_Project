import { FaTimes } from "react-icons/fa";
import { useRef } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

interface Props {
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

export default function ActionDropdown({ onClose, children,title }: Props) {
    const ref = useRef<HTMLDivElement | null>(null);

    useOutsideClick(ref, onClose);

    return (
        // <div ref={ref} className="drop-down-action">
        //     <button className="close-btn" onClick={onClose}>
        //         <FaTimes/>
        //     </button>
        //     {children}
        // </div>


        <div className="drop-down-action">
            {/* <div  className="dropdown-box"> */}
                <div ref={ref} className="dropdown-header">
                    <h2 className="dropdown-title">{title}</h2>
                    <button onClick={onClose} className="close-button">
                        <FaTimes />
                    </button>
                </div>
                    <button onClick={onClose} className="submit-button">Submit
                    </button>

                <div className="dropdown-content">{children}</div>
            </div>
        // </div>
    );
}
