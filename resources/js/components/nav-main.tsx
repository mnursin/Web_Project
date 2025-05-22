import { Link } from '@inertiajs/react';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { NavItem } from '@/types';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export function NavMain({ items, collapsed = false }: { items: NavItem[]; collapsed?: boolean }) {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <SidebarMenu>
      {items.map((item) => (
      <div key={item.title}>
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton
          onClick={() => item.children && toggleMenu(item.title)}
          asChild={!item.children}
          isActive={item.href === window.location.pathname}
          tooltip={{ children: item.title }}
          data-tooltip-id={item.title}
          >
        {item.children ? (
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex items-center gap-2 w-full">
                {item.icon && (
                  <div>
                    <item.icon size={16} />
                  </div>
                )}
                {!collapsed && <span>{item.title}</span>}
              </div>
            {!collapsed && (      
              <span>
              {openMenus[item.title] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </span>
            )}
          </div>
        ) : (
          <Link href={item.href!} className="flex items-center gap-2 w-full">
          {item.icon && <item.icon size={collapsed ? 16 : 20} />} 
          {!collapsed && <span>{item.title}</span>}
          </Link>
        )}
        </SidebarMenuButton>

        </SidebarMenuItem>

          {item.children && openMenus[item.title] && (
            <div className="ml-4">
              {item.children.map((child) => (
                <SidebarMenuItem key={child.title}>
                  <SidebarMenuButton 
                      onClick={() => child.children && toggleMenu(child.title)}
                      asChild={!child.children}
                      isActive={child.href === window.location.pathname}
                      tooltip={{ children: item.title + " "+ child.title }}
                      data-tooltip-id={child.title}
                      >
                      
                    <Link href={child.href!} className="flex items-center gap-2 w-full  text-sm">
                      {item.icon && <item.icon />}
                      {child.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </div>
          )}
        </div>
      ))}
    </SidebarMenu>
  );
}
