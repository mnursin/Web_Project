import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'View Posting',
        href: '/posting/view',
    },
];

interface User {
    id: number;
    name: string;
  }
  
  interface Posting {
    id_posting: number;
    content: string;
    created_at: string;
    user: User;
  }
  
  interface Props {
    postings: Posting[];
  }

// export default function solar() {
//     return (
//         <AppLayout breadcrumbs={breadcrumbs}>
//             <Head title="Solars" />
//             <div className="container mx-auto mt-4">
//             <h1 className="text-2xl font-bold mb-4">Posting List</h1>
//             <div id="posting-list">
//                 {/* Data from controllerPosting's index function will be rendered here */}
//             </div>
//             </div>
//         </AppLayout>
//     );
// }


export default function solar({ postings }: Props) {
    return (
      <AppLayout breadcrumbs={breadcrumbs}>
        <Head title="Daftar Postingan" />
  
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Daftar Postingan</h1>
  
          <div className="space-y-6">
            {postings.map((post) => (
              <div
                key={post.id_posting}
                className="bg-white shadow rounded p-4 border border-gray-200"
              >
                <div className="text-sm text-gray-500 mb-1">
                  Diposting oleh <strong>{post.user.name}</strong> pada{' '}
                  {new Date(post.created_at).toLocaleString()}
                </div>
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            ))}
  
            {postings.length === 0 && (
              <p className="text-gray-500">Belum ada postingan.</p>
            )}
          </div>
        </div>
      </AppLayout>
    );
  }