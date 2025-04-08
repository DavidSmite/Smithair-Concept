'use client'

import AdminShell from '@/components/AdminShell'
import { Toaster, toast } from 'react-hot-toast'

export default function UIPlayground() {
  return (
    <AdminShell>
      <h1 className="text-2xl font-bold mb-6">🧪 UI Playground – Composants Smithair</h1>

      {/* TOASTS */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Toasts</h2>
        <div className="flex gap-4 flex-wrap">
          <button
            className="bg-primary text-white px-4 py-2 rounded"
            onClick={() => toast.success('✅ Succès royal !')}
          >
            Toast Success
          </button>
          <button
            className="bg-danger text-white px-4 py-2 rounded"
            onClick={() => toast.error('❌ Erreur royale')}
          >
            Toast Error
          </button>
          <button
            className="bg-accent text-white px-4 py-2 rounded"
            onClick={() => toast('ℹ️ Info royale')}
          >
            Toast Info
          </button>
        </div>
      </section>

      {/* BOUTONS */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Boutons</h2>
        <div className="flex gap-4 flex-wrap">
          <button className="px-4 py-2 rounded bg-primary text-white">Bouton Primary</button>
          <button className="px-4 py-2 rounded bg-accent text-white">Bouton Accent</button>
          <button className="px-4 py-2 rounded bg-danger text-white">Bouton Danger</button>
          <button className="px-4 py-2 rounded bg-success text-white">Bouton Success</button>
        </div>
      </section>

      {/* INPUTS */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Champs texte</h2>
        <div className="space-y-4">
          <input type="text" placeholder="Nom" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        </div>
      </section>

      {/* BADGES */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Badges</h2>
        <div className="flex gap-3 flex-wrap">
          <span className="bg-primary text-white px-3 py-1 rounded text-sm">.bg-primary</span>
          <span className="bg-accent text-white px-3 py-1 rounded text-sm">.bg-accent</span>
          <span className="bg-success text-white px-3 py-1 rounded text-sm">.bg-success</span>
          <span className="bg-danger text-white px-3 py-1 rounded text-sm">.bg-danger</span>
        </div>
      </section>

      {/* SPINNER */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Loader</h2>
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </section>

      {/* TOASTER (nécessaire pour les toasts) */}
      <Toaster position="top-center" />
    </AdminShell>
  )
}
