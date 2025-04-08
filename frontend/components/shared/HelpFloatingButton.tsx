'use client'

export default function HelpFloatingButton() {
  return (
    <a
      href="/admin/help"
      className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-all group"
      title="Centre d’aide"
    >
      <span className="text-xl">❓</span>

      {/* Tooltip visible uniquement au survol */}
      <span className="absolute right-14 opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded transition pointer-events-none">
        Aide & tutoriels
      </span>
    </a>
  )
}
