'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  User,
  Package,
  ShoppingCart,
  BarChart2,
  Settings,
} from 'lucide-react';

export default function SidebarAdmin() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Profil', href: '/admin/profile', icon: <User size={16} /> },
    { label: 'Produits', href: '/admin/products', icon: <Package size={16} /> },
    { label: 'Commandes', href: '/admin/orders', icon: <ShoppingCart size={16} /> },
    { label: 'Statistiques', href: '/admin/stats', icon: <BarChart2 size={16} /> },
    { label: 'Paramètres', href: '/admin/settings', icon: <Settings size={16} /> },
  ];

  return (
    <aside className="w-64 min-h-screen bg-black text-white p-6 border-r border-gray-700 flex flex-col">
      <div className="mb-8">
        <Image
          src="/logo-smithhair.png"
          alt="Logo SmithHair"
          width={120}
          height={40}
        />
      </div>
      <nav className="flex flex-col space-y-2">
        {navItems.map(({ label, href, icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center space-x-2 px-4 py-2 rounded ${
              pathname === href
                ? 'bg-white text-black font-bold'
                : 'hover:bg-white hover:text-black'
            }`}
          >
            <span>{icon}</span>
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
