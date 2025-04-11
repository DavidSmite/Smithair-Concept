'use client'

import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { DataTable } from './ui/data-table'

interface Product {
  id: number
  name: string
  category: string
  price: number
  stock: number
  isNew: boolean
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Perruque Prestige',
    category: 'Lace Front',
    price: 149.99,
    stock: 12,
    isNew: true,
  },
  {
    id: 2,
    name: 'Afro Queen Deluxe',
    category: 'Afro',
    price: 119.5,
    stock: 3,
    isNew: false,
  },
  {
    id: 3,
    name: 'Élégance Naturelle',
    category: 'Closure',
    price: 99.9,
    stock: 0,
    isNew: false,
  },
]

export default function ProductsTable() {
  return (
    <DataTable>
      <table className="min-w-full text-sm text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-4">Nom</th>
            <th className="py-2 px-4">Catégorie</th>
            <th className="py-2 px-4">Prix (€)</th>
            <th className="py-2 px-4">Stock</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockProducts.map((product) => (
            <tr key={product.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="py-2 px-4 font-medium flex gap-2 items-center">
                {product.name}
                {product.isNew && <Badge>Nouveau</Badge>}
              </td>
              <td className="py-2 px-4">{product.category}</td>
              <td className="py-2 px-4">{product.price.toFixed(2)}</td>
              <td className="py-2 px-4">
                {product.stock === 0 ? (
                  <Badge>Rupture</Badge>
                ) : product.stock < 5 ? (
                  <Badge>Stock faible</Badge>
                ) : (
                  `${product.stock}`
                )}
              </td>
              <td className="py-2 px-4">
                <Button onClick={() => alert(`Modifier ${product.name}`)}>Modifier</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DataTable>
  )
}
