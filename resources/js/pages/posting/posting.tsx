import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posting',
        href: '/posting/posting',
    },
];

export default function posting() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Postingssssss" />
        </AppLayout>
    );
}
