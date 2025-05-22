import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useRef } from 'react';
import { Inertia } from '@inertiajs/inertia';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posting',
        href: '/posting/createPosting',
    },
];

export default function solar() {
    const editorRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const initializeQuill = async () => {
            if (editorRef.current) {
                // Load Quill after component mounts
                const Quill = (await import('quill')).default;
                await import('quill/dist/quill.snow.css');

                const quill = new Quill(editorRef.current, {
                    theme: 'snow',
                    placeholder: 'Tulis catatan di sini...',
                    modules: {
                        toolbar: [
                            [{ header: [1, 2, false] }],
                            ['bold', 'italic', 'underline'],
                            [{ list: 'ordered' }, { list: 'bullet' }],
                            ['image', 'link'],
                            ['clean'],
                        ],
                    },
                });

                // Simpan instance Quill ke ref jika diperlukan
                (window as any).quill = quill;
            }
        };

        initializeQuill();
    }, []);

    const handleSave = () => {
        const content = (window as any).quill.root.innerHTML;
        console.log('Konten disimpan:', content);
        // TODO: Kirim ke backend menggunakan Inertia.post atau axios
    };  
    
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Editor Catatan" />

            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Catatan Saya</h1>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-lg font-large mb-1">
                        Deskripsi
                    </label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Masukkan deskripsi catatan"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-lg font-medium mb-1">
                        Kategori
                    </label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Masukkan kategori catatan"
                    />
                </div>

                <div ref={editorRef} className="bg-white rounded shadow p-4 mb-4" style={{ minHeight: '300px' }} />
        
                <button
                    onClick={() => {
                        const content = (window as any).quill.root.innerHTML;
                        console.log('Konten disimpan:', content);
                        // Kirim ke endpoint /postings menggunakan Inertia.post
                        Inertia.post('/postings', { content });
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Simpan
                </button>
            </div>


            
        </AppLayout>                
    );
}



// import { Head } from '@inertiajs/react';
// import { useEffect, useRef } from 'react';
// import AppLayout from '@/layouts/app-layout';
// import { type BreadcrumbItem } from '@/types';

// const breadcrumbs: BreadcrumbItem[] = [
//     {
//         title: 'Posting',
//         href: '/posting/posting',
//     },
// ];

// export default function Solar() {
//     const editorRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (editorRef.current) {
//             // Load Quill after component mounts
//             const Quill = require('quill');
//             require('quill/dist/quill.snow.css');

//             const quill = new Quill(editorRef.current, {
//                 theme: 'snow',
//                 placeholder: 'Tulis catatan di sini...',
//                 modules: {
//                     toolbar: [
//                         [{ header: [1, 2, false] }],
//                         ['bold', 'italic', 'underline'],
//                         [{ list: 'ordered' }, { list: 'bullet' }],
//                         ['image', 'link'],
//                         ['clean'],
//                     ],
//                 },
//             });

//             // Simpan instance Quill ke ref jika diperlukan
//             (window as any).quill = quill;
//         }
//     }, []);

//     const handleSave = () => {
//         const content = (window as any).quill.root.innerHTML;
//         console.log('Konten disimpan:', content);
//         // TODO: Kirim ke backend menggunakan Inertia.post atau axios
//     };

//     return (
//         <AppLayout  breadcrumbs={breadcrumbs}>
//             <Head title="Editor Catatan" />

//             <div className="p-6">
//                 <h1 className="text-2xl font-bold mb-4">Catatan Saya</h1>

//                 <div ref={editorRef} className="bg-white rounded shadow p-4 mb-4" style={{ minHeight: '300px' }} />

//                 <button
//                     onClick={handleSave}
//                     className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 >
//                     Simpan
//                 </button>
//             </div>
//         </AppLayout>
//     );
// }
