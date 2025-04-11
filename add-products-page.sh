#!/bin/bash

echo "🚀 Création de la page /admin/products..."

mkdir -p frontend/app/admin/products

cat > frontend/app/admin/products/page.tsx << 'EOF'
'use client'

import { useEffect, useState } from 'react'

type Product = {
  id: number
  name: string
  price: number
  stock: number
  isNew: boolean
  image?: string
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:4000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.reverse()))
  }, [])

  const handleDelete = async (id: number) => {
    const confirmDelete = confirm('Supprimer ce produit ?')
    if (!confirmDelete) return

    const res = await fetch(`http://localhost:4000/api/products/${id}`, {
      method: 'DELETE',
    })

    if (res.ok) {
      setProducts((prev) => prev.filter((p) => p.id !== id))
    } else {
      alert('Erreur lors de la suppression.')
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">🛍️ Gestion des Perruques</h1>

      <a
        href="/admin/products/add"
        className="inline-block mb-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        ➕ Ajouter une perruque
      </a>

      <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700 text-left text-sm">
            <th className="p-4">Image</th>
            <th className="p-4">Nom</th>
            <th className="p-4">Prix (€)</th>
            <th className="p-4">Stock</th>
            <th className="p-4">Nouveau</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id} className="border-t dark:border-gray-700">
              <td className="p-4">
                {prod.image ? (
                  <img
                    src={`/uploads/${prod.image}`}
                    alt={prod.name}
                    className="w-16 h-16 object-cover rounded-xl"
                  />
                ) : (
                  <span className="text-gray-400 italic">Aucune</span>
                )}
              </td>
              <td className="p-4">{prod.name}</td>
              <td className="p-4">{prod.price}</td>
              <td className="p-4">
                {prod.stock > 0 ? prod.stock : <span className="text-red-500">Rupture</span>}
              </td>
              <td className="p-4">{prod.isNew ? '🆕' : ''}</td>
              <td className="p-4 space-x-2">
                <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600">
                  ✏️ Modifier
                </button>
                <button className="px-3 py-1 text-xs bg-yellow-500 text-white rounded hover:bg-yellow-600">
                  📄 Dupliquer
                </button>
                <button
                  onClick={() => handleDelete(prod.id)}
                  className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                >
                  🗑️ Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
EOF

echo "✅ Page /admin/products créée avec succès 🎉"
