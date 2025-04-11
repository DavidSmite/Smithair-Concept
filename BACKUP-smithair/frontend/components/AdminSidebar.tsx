'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import {
  LayoutDashboard,
  ShoppingBag,
  ClipboardList,
  BarChart3
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'dashboard', href: '/admin' },
  { icon: ShoppingBag, label: 'products', href: '/admin/products' },
  { icon: ClipboardList, label: 'orders', href: '/admin/orders' },
  { icon: BarChart3, label: 'stats', href: '/admin/stats' }
];

export default function AdminSidebar() {
  const t = useTranslations('admin');
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-64 bg-gray-100 p-4 rounded-lg shadow-md">
      <nav className="space-y-2">
        {navItems.map(({ icon: Icon, label, href }) => {
          const fullHref = `/${locale}${href}`;
          const isActive = pathname === fullHref;

          return (
            <Link
              key={label}
              href={fullHref}
              className={`flex items-center gap-3 px-4 py-2 rounded text-sm font-medium transition ${
                isActive
                  ? 'bg-black text-white'
                  : 'text-gray-800 hover:bg-gray-200'
              }`}
            >
              <Icon size={18} />
              {t(label)}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
