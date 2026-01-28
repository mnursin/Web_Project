// import { useEffect } from "react";

// export default function useOutsideClick(
//     ref: React.RefObject<HTMLElement | null>,
//     callback: () => void
// ) {
//     useEffect(() => {
//         function handleClick(e: MouseEvent) {
//             if (
//                 // ref.current && e.target instanceof Node &&
//                 // !ref.current.contains(e.target) 
//                 ref.current &&
//                 !ref.current.contains(e.target as Node)
//             ) {
//                 callback();
//             }
//         }

//         document.addEventListener("mousedown", handleClick);
//         return () => document.removeEventListener("mousedown", handleClick);
//     }, [ref, callback]);
// }



import { useEffect } from "react";

export default function useOutsideClick(
    ref: React.RefObject<HTMLElement>,
    handler: () => void
) {
    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (!ref.current) return;
            if (ref.current.contains(event.target as Node)) return;

            handler();
        };

        document.addEventListener("mousedown", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
        };
    }, [ref, handler]);
}
