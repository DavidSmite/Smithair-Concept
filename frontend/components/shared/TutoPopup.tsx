'use client'

import { useEffect, useState } from 'react'

export default function TutoPopup() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const seen = localStorage.getItem('seen-smithair-client')
    if (!seen) setShow(true)
  }, [])

  const close = () => {
    localStorage.setItem('seen-smithair-client', 'true')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl max-w-md shadow-xl text-sm text-gray-800 dark:text-white">
        <h2 className="text-lg font-bold mb-2">👑 Bienvenue chez Smithair Concept</h2>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>🧞‍♀️ Navigue vers "Nos Perruques" pour découvrir notre collection</li>
          <li>🛒 Clique sur "Ajouter au panier" pour les sélectionner</li>
          <li>💳 Finalise ta commande depuis la page Panier</li>
          <li>📦 Livraison estimée sous 48-72h</li>
        </ul>
        <button
          onClick={close}
          className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/80"
        >
          ✅ J’ai compris
        </button>
      </div>
    </div>
  )
}
