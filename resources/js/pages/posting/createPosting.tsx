import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useRef } from 'react';
import { Inertia } from '@inertiajs/inertia';
import 'D:/Laravel/solar/resources/css/stylesaya.css'


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Posting',
        href: '/posting/createPosting',
    },
];
import { useState } from 'react';


export default function CreatePosting() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const editorRef = useRef<HTMLDivElement>(null);

    //
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
                    <label htmlFor="description" className="block text-lg font-large mb-1 ">
                        Description
                    </label>
                    <input
                        type="text"
                        id="description_post_input"
                        name="description"
                        // className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Masukkan deskripsi catatan"
                        
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-lg font-medium mb-1">
                        Category
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {[
                            { value: 'backend', label: 'Backend' },
                            { value: 'frontend', label: 'Frontend' },
                            { value: 'mobileApp', label: 'Mobile Apps' },
                            { value: 'webApp', label: 'Web Apps' },
                            { value: 'electrical', label: 'Electrical' },
                            { value: 'IoT', label: 'IoT/firmware' },
                            { value: 'story', label: 'Story' },
                            { value: 'other', label: 'Other' },
                        ].map(option => (
                            <button
                                key={option.value}
                                type="button"
                                className={`px-3 py-1 rounded border ${
                                    selectedCategories.includes(option.value)
                                        ? 'bg-blue-600 text-white border-blue-600'
                                        : 'bg-white text-gray-700 border-gray-300'
                                }`}
                                onClick={() => {
                                    setSelectedCategories(prev =>
                                        prev.includes(option.value)
                                            ? prev.filter(v => v !== option.value)
                                            : [...prev, option.value]
                                    );
                                }}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                    <small className="text-gray-500">Klik untuk memilih/menonaktifkan kategori.</small>
                </div>

                <div ref={editorRef} className="bg-white rounded shadow p-4 mb-4" style={{ minHeight: '300px' }} />
        
                <button
                    onClick={() => {
                        const content = (window as any).quill.root.innerHTML;
                        console.log('Konten disimpan:', content);
                        // Kirim ke endpoint /postings menggunakan Inertia.post
                        Inertia.post('/postings', { content,
                            categories: selectedCategories,
                            description: (document.getElementById('description') as HTMLInputElement).value });
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mt-6"
                >
                    Simpan
                </button>
            </div>


            
        </AppLayout>                
    );
}

