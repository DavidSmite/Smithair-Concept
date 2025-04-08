'use client'

import { useState } from 'react'
import LogoRandom from './LogoRandom'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b bg-white dark:bg-gray-900 p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <LogoRandom />

        {/* Bouton Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
        >
          🍔
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-700 dark:text-gray-300">
          <a href="/wigs" className="hover:underline">Nos Perruques</a>
          <a href="/cart" className="hover:underline">Panier</a>
          <a href="/about" className="hover:underline">À propos</a>
        </nav>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
