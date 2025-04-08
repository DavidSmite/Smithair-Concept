'use client'

import { useEffect, useState } from 'react'

export default function AdminTuto() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const seen = localStorage.getItem('seen-smithair-admin')
    if (!seen) setShow(true)
  }, [])

  const close = () => {
    localStorage.setItem('seen-smithair-admin', 'true')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl max-w-md shadow-xl text-sm text-gray-800 dark:text-white">
        <h2 className="text-lg font-bold mb-2">🎓 Guide Admin – Smithair</h2>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>➕ Ajouter une perruque depuis l’onglet “Produits”</li>
          <li>📈 Voir les ventes dans “Statistiques”</li>
          <li>📤 Exporter CSV pour analyser les données</li>
          <li>🧠 Gérer les stocks et la nouveauté par ligne produit</li>
        </ul>
        <button
          onClick={close}
          className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/80"
        >
          ✅ C’est bon pour moi
        </button>
      </div>
    </div>
  )
}
