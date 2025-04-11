'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

export default function AdminNavbar() {
  const t = useTranslations('admin');
  const pathname = usePathname();
  const locale = useLocale();

  const links = [
    { href: `/${locale}/admin`, label: t('dashboard') },
    { href: `/${locale}/admin/products`, label: t('products') },
    { href: `/${locale}/admin/orders`, label: t('orders') },
    { href: `/${locale}/admin/stats`, label: t('stats') }
  ];

  return (
    <nav className="flex flex-wrap items-center gap-4 mb-8">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`px-4 py-2 rounded text-sm ${
            pathname === href
              ? 'bg-black text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
