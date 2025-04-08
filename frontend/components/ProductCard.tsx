'use client'

import StatusBadge from './StatusBadge'

type Props = {
  name: string
  price: number
  image?: string
  stock: number
  isNew: boolean
}

export default function ProductCard({ name, price, image, stock, isNew }: Props) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800">
      {image ? (
        <img src={`/uploads/${image}`} className="w-full h-48 object-cover" alt={name} />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 italic">Aucune image</div>
      )}
      <div className="p-4 space-y-1">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{price.toFixed(2)} €</p>
        <StatusBadge status={stock === 0 ? 'out' : isNew ? 'new' : 'ok'} />
      </div>
    </div>
  )
}
