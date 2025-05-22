import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Solar Panel',
        href: '/solar',
    },
];

export default function solar() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Solars" />
        </AppLayout>
    );
}
