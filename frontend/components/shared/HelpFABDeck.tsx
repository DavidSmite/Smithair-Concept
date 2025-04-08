'use client'

import { useState } from 'react'
import { useTooltips } from '@/context/TooltipContext'

export default function HelpFABDeck() {
  const [open, setOpen] = useState(false)
  const { enabled, toggle } = useTooltips()

  const resetTuto = () => {
    localStorage.removeItem('seen-smithair-admin')
    window.location.reload()
  }

  return (
    <>
      {/* Background overlay when open */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
        {open && (
          <>
            <button
              onClick={() => window.location.href = '/admin/help'}
              className="px-4 py-2 bg-indigo-600 text-white text-xs rounded shadow hover:bg-indigo-700"
            >
              📖 Centre d’aide
            </button>
            <button
              onClick={toggle}
              className={`px-4 py-2 text-xs rounded shadow ${
                enabled ? 'bg-yellow-600 hover:bg-yellow-700 text-white' : 'bg-gray-600 hover:bg-gray-700 text-white'
              }`}
            >
              {enabled ? '🙈 Aide OFF' : '❔ Aide ON'}
            </button>
            <button
              onClick={resetTuto}
              className="px-4 py-2 bg-green-600 text-white text-xs rounded shadow hover:bg-green-700"
            >
              🔁 Revoir le tuto
            </button>
          </>
        )}

        {/* Bouton principal */}
        <button
          onClick={() => setOpen(!open)}
          className="w-12 h-12 rounded-full bg-primary text-white text-xl flex items-center justify-center shadow-lg hover:bg-primary/80 transition-all"
          title="Aide rapide"
        >
          {open ? '✖' : '❓'}
        </button>
      </div>
    </>
  )
}
