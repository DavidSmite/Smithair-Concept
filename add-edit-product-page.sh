#!/bin/bash

echo "🚀 Création de la page d'édition /admin/products/[id]/edit..."

mkdir -p frontend/app/admin/products/[id]/edit

cat > frontend/app/admin/products/[id]/edit/page.tsx << 'EOF'
'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

export default function EditProductPage() {
  const { id } = useParams()
  const router = useRouter()
  const [product, setProduct] = useState<any>(null)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [isNew, setIsNew] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:4000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
        setName(data.name)
        setPrice(data.price)
        setStock(data.stock)
        setIsNew(data.isNew)
      })
  }, [id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch(`http://localhost:4000/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price, stock, isNew }),
    })

    if (res.ok) {
      router.push('/admin/products')
    } else {
      alert("Erreur lors de la mise à jour.")
    }
  }

  if (!product) return <p className="p-8">Chargement...</p>

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">✏️ Modifier la perruque</h1>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
        <div>
          <label className="block text-sm font-medium">Nom</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-800" />
        </div>
        <div>
          <label className="block text-sm font-medium">Prix (€)</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-800" />
        </div>
        <div>
          <label className="block text-sm font-medium">Stock</label>
          <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-800" />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" checked={isNew} onChange={() => setIsNew(!isNew)} />
          <label className="text-sm">Nouveau ?</label>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">💾 Sauvegarder</button>
      </form>
    </div>
  )
}
EOF

echo "✅ Page /admin/products/[id]/edit créée avec succès 🎉"
