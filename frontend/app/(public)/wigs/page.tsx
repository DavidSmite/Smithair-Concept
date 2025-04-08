'use client'

import Image from 'next/image'
import Card from '@/components/ui/Card'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

const wigs = [
  {
    name: 'Sunshine Fro',
    price: 99.99,
    image: '/uploads/sunshine-fro.jpg',
  },
  {
    name: 'Urban Bob',
    price: 89.5,
    image: '/uploads/urban-bob.jpg',
  },
]

export default function WigsPage() {
  const { addToCart } = useCart()

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-6">
      <h1 className="text-3xl font-bold">🧞‍♀️ Nos Perruques</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {wigs.map((wig, i) => (
          <Card key={i}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={wig.image}
                alt={wig.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="mt-4 space-y-1">
              <h2 className="text-lg font-semibold">{wig.name}</h2>
              <p className="text-sm text-gray-500">{formatPrice(wig.price)}</p>

              <button
                onClick={() =>
                  addToCart({
                    name: wig.name,
                    price: wig.price,
                    quantity: 1,
                    image: wig.image,
                  })
                }
                className="mt-4 px-4 py-2 bg-primary text-white text-sm rounded hover:bg-primary/80 transition"
              >
                🛒 Ajouter au panier
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
