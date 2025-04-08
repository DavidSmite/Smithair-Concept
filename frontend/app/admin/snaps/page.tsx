'use client'

import AdminShell from '@/components/AdminShell'

const snaps = [
  { title: '🧠 Snap Product UX', description: 'Formulaire intelligent avec validation, image preview, toast et autosave.' },
  { title: '💬 Snap ToastCenter', description: 'Toasts centralisés, stylés et visibles sur toutes les pages.' },
  { title: '📝 Snap Draft Status', description: 'Détection automatique de brouillons, restauration + vidage.' },
  { title: '⚡ Snap ZEUS UltraPack', description: 'Combo complet : edit autofill, upload sécurisé, draft manager, toast redirect.' },
  { title: '☁️ Snap Upload Secure', description: 'Renommage dynamique des images avec timestamp, protection backend.' },
  { title: '📥 Snap Edit AutoFill', description: 'Remplit le formulaire d’édition avec le brouillon si aucun `initialData`.' },
  { title: '🧹 Snap Draft Manager', description: 'Route `/admin/drafts` pour visualiser, relire et supprimer les brouillons.' },
  { title: '🎉 Snap UX Booster', description: 'Boutons supplémentaires, preview zoomable, UX deluxe avec redirect + toast.' },
  { title: '🃏 Snap CardCollection', description: 'Ce que tu es en train de lire maintenant 😏' },
]

export default function SnapsPage() {
  return (
    <AdminShell>
      <h1 className="text-2xl font-bold mb-6">🃏 Deck Royal de Smithair</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {snaps.map((snap, index) => (
          <div key={index} className="border border-gray-300 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-gray-800 shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">{snap.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{snap.description}</p>
          </div>
        ))}
      </div>
    </AdminShell>
  )
}
