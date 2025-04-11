#!/bin/bash

echo "🚀 Création de la page /admin/products/add..."

mkdir -p frontend/app/admin/products/add

cat > frontend/app/admin/products/add/page.tsx << 'EOF'
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddProductPage() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [isNew, setIsNew] = useState(false)
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const router = useRouter()

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('stock', stock)
    formData.append('isNew', isNew.toString())
    if (image) formData.append('image', image)

    try {
      const res = await fetch('http://localhost:4000/api/products', {
        method: 'POST',
        body: formData,
      })

      if (res.ok) {
        router.push('/admin/products')
      } else {
        alert('Erreur lors de l’ajout')
      }
    } catch (err) {
      console.error(err)
      alert('Erreur réseau')
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">➕ Ajouter une nouvelle perruque</h1>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
        <div>
          <label className="block text-sm font-medium">Nom du produit</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-800"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Prix (€)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-800"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Stock</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
            className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-800"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isNew}
            onChange={() => setIsNew(!isNew)}
          />
          <label className="text-sm">Nouveau produit ?</label>
        </div>

        <div>
          <label className="block text-sm font-medium">Image</label>
          <input type="file" accept="image/*" onChange={handleImage} />
          {preview && (
            <img src={preview} alt="preview" className="mt-4 w-40 h-40 object-cover rounded-xl shadow" />
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Enregistrer le produit
        </button>
      </form>
    </div>
  )
}
EOF

echo "✅ Page /admin/products/add créée avec succès 🎉"
