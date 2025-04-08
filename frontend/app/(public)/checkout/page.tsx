'use client'

import { useEffect } from 'react'
import { useCart } from '@/context/CartContext'

export default function CheckoutPage() {
  const { clearCart } = useCart()

  useEffect(() => {
    // Réinitialiser le panier dès arrivée sur la page
    clearCart()
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 animate-fade-in">
      <h1 className="text-3xl font-bold text-green-600 mb-4">✅ Commande confirmée</h1>
      <p className="text-gray-600 mb-6">
        Merci pour ta commande chez Smithair Concept 👑<br />
        Tu recevras une notification dès que le colis sera expédié.
      </p>
      <a
        href="/"
        className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition"
      >
        🏠 Retour à l’accueil
      </a>
    </div>
  )
}
