'use client'

import Link from 'next/link'
import LogoutButton from '@/app/components/LogoutButton'

export default function Header() {
  return (
    <header className="w-full bg-[#0f172a] text-white px-6 py-4 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Branding */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Smithair <span className="text-yellow-400">Concept</span>
        </Link>

        {/* Déconnexion */}
        <LogoutButton />
      </div>
    </header>
  )
}
