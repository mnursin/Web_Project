import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useRef } from 'react';
import { Inertia } from '@inertiajs/inertia';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Market',
        href: '/posting/createPosting',
    },
];

import { useState } from 'react';

export default function CreatePosting() {


    
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Editor Catatan" />
            
        </AppLayout>                
    );
}

