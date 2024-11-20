import { cn } from '@nextui-org/react';
import { Home, PieChart } from 'lucide-react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

import { Text } from '../../components/atom';

interface SideMenuItem {
  key: string;
  title?: string;
  children?: {
    label: string;
    to: string;
    icon?: React.ReactNode;
    isActive?: boolean;
  }[];
}

export function SidebarMenuItem() {
  const pathname = usePathname();
  const params = useParams()

  const menuItem: SideMenuItem[] = [
    {
      key: 'home-overview',
      children: [
        {
          label: 'Home',
          to: `/${params.storeId}`,
          isActive: pathname === `/${params.storeId}`,
          icon: <Home size={14} strokeWidth={2} className="mr-2" />,
        },
        {
          label: 'Dashboard',
          to: `/${params.storeId}/dashboard`,
          isActive: pathname === `/${params.storeId}/dashboard`,
          icon: <PieChart size={14} strokeWidth={2} className="mr-2" />,
        },
      ],
    },
  ];

  return (
    <nav role="navigation" className="flex shrink-0 grow flex-col gap-y-4 px-2">
      {menuItem.map((menu) => (
        <div key={menu.key}>
          {menu.title && (
            <Text
              component="div"
              weight="medium"
              size="small"
              className="mb-3 text-gray-500"
            >
              {menu.title}
            </Text>
          )}
          {menu.children && (
            <ul className="flex shrink-0 grow flex-col gap-y-1">
              {menu.children.map((child) => (
                <li key={child.label}>
                  <Link
                    href={child.to}
                    className={cn(
                      'flex items-center rounded-md px-3 py-2 text-sm font-[450] transition-colors hover:bg-primary-300 hover:text-white',
                      child.isActive ? 'bg-primary-50' : ''
                    )}
                  >
                    {child.icon && child.icon}
                    <Text component="span">{child.label}</Text>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </nav>
  );
}
