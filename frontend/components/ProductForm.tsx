'use client'

import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

type ProductFormProps = {
  initialData?: {
    name: string
    price: number
    stock: number
    isNew: boolean
    image?: string
  }
  onSubmit: (form: FormData) => void
}

export default function ProductForm({ initialData, onSubmit }: ProductFormProps) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(1)
  const [isNew, setIsNew] = useState(true)
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [draftDetected, setDraftDetected] = useState(false)

  // 🧠 Restoration depuis localStorage
  useEffect(() => {
    const saved = localStorage.getItem('draft-product')
    const parsed = saved ? JSON.parse(saved) : null

    if (parsed && !initialData) {
      setName(parsed.name || '')
      setPrice(parsed.price || 0)
      setStock(parsed.stock || 1)
      setIsNew(parsed.isNew ?? true)
      setDraftDetected(true)
    }

    if (initialData) {
      setName(initialData.name)
      setPrice(initialData.price)
      setStock(initialData.stock)
      setIsNew(initialData.isNew)
      if (initialData.image) {
        setPreview(`/uploads/${initialData.image}`)
      }
    }
  }, [initialData])

  useEffect(() => {
    const draft = JSON.stringify({ name, price, stock, isNew })
    localStorage.setItem('draft-product', draft)
  }, [name, price, stock, isNew])

  const handleImage = (file: File | null) => {
    if (file) {
      setImage(file)
      setPreview(URL.createObjectURL(file))
    } else {
      setImage(null)
      setPreview(null)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || price <= 0 || stock < 0) {
      toast.error('❌ Vérifie les champs du formulaire.')
      return
    }

    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', String(price))
    formData.append('stock', String(stock))
    formData.append('isNew', String(isNew))
    if (image) formData.append('image', image)

    toast.success('📤 Produit enregistré avec succès ! Redirection...')
    onSubmit(formData)
    localStorage.removeItem('draft-product')

    setTimeout(() => {
      window.location.href = '/admin/products'
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
      {draftDetected && (
        <div className="p-4 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-xl mb-6">
          <p className="mb-2 font-medium">⚠️ Brouillon détecté</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                const saved = JSON.parse(localStorage.getItem('draft-product') || '{}')
                setName(saved.name || '')
                setPrice(saved.price || 0)
                setStock(saved.stock || 1)
                setIsNew(saved.isNew ?? true)
                toast.success('📝 Brouillon restauré')
                setDraftDetected(false)
              }}
              className="px-4 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              🔄 Restaurer
            </button>
            <button
              type="button"
              onClick={() => {
                localStorage.removeItem('draft-product')
                setDraftDetected(false)
                toast.success('🧹 Brouillon supprimé')
              }}
              className="px-4 py-1 text-sm bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              🧹 Vider
            </button>
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-1">Nom</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-2 border rounded" />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Prix (€)</label>
          <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} required className="w-full p-2 border rounded" />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Stock</label>
          <input type="number" value={stock} onChange={(e) => setStock(Number(e.target.value))} required className="w-full p-2 border rounded" />
        </div>
      </div>

      <label className="flex items-center gap-2">
        <input type="checkbox" checked={isNew} onChange={() => setIsNew(!isNew)} />
        Produit Nouveau
      </label>

      <div>
        <label className="block text-sm font-medium mb-1">Image</label>
        <input type="file" accept="image/*" onChange={(e) => handleImage(e.target.files?.[0] || null)} />
        {preview && (
          <a href={preview} target="_blank" rel="noopener noreferrer">
            <img
              src={preview}
              alt="Preview"
              className="mt-2 w-32 h-32 object-cover rounded-xl border hover:scale-105 transition-transform duration-300"
            />
          </a>
        )}
      </div>

      <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        💾 Enregistrer
      </button>
    </form>
  )
}
