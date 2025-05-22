import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Posting',
        href: '/posting/posting',
        icon: LayoutGrid,
        children: [
            {
                title: 'Views',
                href: '/posting/view',
                icon: LayoutGrid,
            },
            {
              title: 'Create',
              href: '/posting/createPosting',
              icon: LayoutGrid,
            },
            {
              title: 'Pengaturan',
              href: '/solar/settings',
              icon: LayoutGrid,
            },
          ],
    },
    {
        title: 'Resume',
        href: '/resume/resume',
        icon: LayoutGrid,
    },
    {
        title: 'Solar panels',
        href: '/solar/solar',
        icon: LayoutGrid,
        children: [
            {
              title: 'Monitoring',
              href: '/solar/monitoring',
              icon: LayoutGrid,
            },
            {
              title: 'Pengaturan',
              href: '/solar/settings',
              icon: LayoutGrid,
            },
          ],
    },
    {
        title: 'User',
        href: '/user/user',
        icon: LayoutGrid,
    },

];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: '/documentation',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
