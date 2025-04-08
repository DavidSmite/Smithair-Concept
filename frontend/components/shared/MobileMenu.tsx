'use client'

import { useEffect } from 'react'

type Props = {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: Props) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu sliding */}
      <div className="ml-auto w-64 bg-white dark:bg-gray-900 p-6 shadow-xl animate-slide-in-right">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-red-500"
            aria-label="Fermer"
          >
            ❌
          </button>
        </div>

        <nav className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
          <a href="/wigs" onClick={onClose} className="block hover:underline">Nos Perruques</a>
          <a href="/cart" onClick={onClose} className="block hover:underline">Panier</a>
          <a href="/about" onClick={onClose} className="block hover:underline">À propos</a>
        </nav>
      </div>
    </div>
  )
}
