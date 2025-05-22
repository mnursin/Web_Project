import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'User',
        href: '/user/user',
    },
];

export default function user() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User" />
        </AppLayout>
    );
}
