import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Resume',
        href: '/resume/resume',
    },
];

export default function Resume() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Resume" />
        </AppLayout>
    );
}
