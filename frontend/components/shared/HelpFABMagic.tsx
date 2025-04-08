'use client'

import { useState } from 'react'
import { useTooltips } from '@/context/TooltipContext'

export default function HelpFABMagic() {
  const [open, setOpen] = useState(false)
  const { enabled, toggle } = useTooltips()

  const resetTuto = () => {
    localStorage.removeItem('seen-smithair-admin')
    window.location.reload()
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Orbital Buttons */}
        <div className="absolute bottom-0 right-0 transform translate-y-2">
          <div className={`transition-all duration-300 ease-in-out ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
            <div className="flex flex-col items-end gap-2">
              <button
                onClick={() => window.location.href = '/admin/help'}
                className="px-3 py-2 bg-indigo-600 text-white text-xs rounded shadow hover:bg-indigo-700"
              >
                📖 Aide
              </button>
              <button
                onClick={toggle}
                className={`px-3 py-2 text-xs rounded shadow ${
                  enabled ? 'bg-yellow-600 hover:bg-yellow-700 text-white' : 'bg-gray-600 hover:bg-gray-700 text-white'
                }`}
              >
                {enabled ? '🙈 Aide OFF' : '❔ Aide ON'}
              </button>
              <button
                onClick={resetTuto}
                className="px-3 py-2 bg-green-600 text-white text-xs rounded shadow hover:bg-green-700"
              >
                🔁 Tutoriel
              </button>
            </div>
          </div>
        </div>

        {/* Main FAB Button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 rounded-full bg-primary text-white text-2xl flex items-center justify-center shadow-xl hover:bg-primary/80 transition-all"
          title="Aide"
        >
          {open ? '✖' : '❓'}
        </button>
      </div>
    </div>
  )
}
