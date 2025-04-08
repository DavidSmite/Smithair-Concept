'use client'

import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function CartPage() {
  const { cart, removeItem, clearCart } = useCart()
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 animate-fade-in">
      <h1 className="text-2xl font-bold mb-6">��️ Ton panier</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Ton panier est vide.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item, i) => (
              <li key={i} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">
                    {formatPrice(item.price)} × {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.name)}
                  className="text-red-500 hover:underline text-sm"
                >
                  ❌ Retirer
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t pt-4">
            <p className="text-lg font-semibold">
              Total : {formatPrice(total)}
            </p>
            <div className="flex gap-3 mt-4">
              <button
                onClick={clearCart}
                className="px-4 py-2 bg-gray-300 text-sm rounded hover:bg-gray-400"
              >
                Vider
              </button>
              <a
                href="/checkout"
                className="px-4 py-2 bg-primary text-white text-sm rounded hover:bg-primary/80"
              >
                💳 Commander
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
