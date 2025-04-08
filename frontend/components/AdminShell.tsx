'use client'

import { ReactNode } from 'react'
import { TooltipProvider } from '@/context/TooltipContext'
import AdminTuto from './shared/AdminTuto'
import HelpFABMagic from './shared/HelpFABMagic'

type Props = {
  children: ReactNode
}

export default function AdminShell({ children }: Props) {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Barre d'en-tête */}
        <header className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-700">
          <h1 className="text-xl font-bold">🛠️ Backoffice Smithair 👑</h1>
          <div className="flex gap-3">
            <button
              onClick={() => {
                document.documentElement.classList.toggle('dark')
                localStorage.setItem(
                  'theme',
                  document.documentElement.classList.contains('dark') ? 'dark' : 'light'
                )
              }}
              className="px-3 py-1 text-sm rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              🌙 Sombre
            </button>
            <a
              href="/api/logout"
              className="px-3 py-1 text-sm rounded bg-red-600 text-white hover:bg-red-700"
            >
              🔓 Déconnexion
            </a>
          </div>
        </header>

        {/* Tuto Admin affiché une seule fois */}
        <AdminTuto />

        {/* Contenu principal */}
        <main className="p-6">{children}</main>

        {/* 🔮 Bouton magique flottant d'aide */}
        <HelpFABMagic />
      </div>
    </TooltipProvider>
  )
}
