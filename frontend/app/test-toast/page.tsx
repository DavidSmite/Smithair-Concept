'use client'

import { useToastStore } from '@/lib/toastStore'

export default function TestToastPage() {
  const { triggerToast } = useToastStore()

  return (
    <main className="max-w-xl mx-auto mt-24 p-8 text-center space-y-6">
      <h1 className="text-3xl font-bold text-rose-600">Test des Toasts</h1>
      <p className="text-gray-500">Clique sur un bouton pour déclencher un toast.</p>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => triggerToast('✅ Toast succès actif !', 'success')}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Toast succès
        </button>

        <button
          onClick={() => triggerToast('❌ Toast erreur déclenché !', 'error')}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Toast erreur
        </button>
      </div>
    </main>
  )
}
