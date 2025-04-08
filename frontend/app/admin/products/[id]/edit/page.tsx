'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import AdminShell from '@/components/AdminShell'
import ProductForm from '@/components/ProductForm'

export default function EditProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<any>(null)

  useEffect(() => {
    fetch(`http://localhost:4000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [id])

  const handleSubmit = async (formData: FormData) => {
    const res = await fetch(`http://localhost:4000/api/products/${id}`, {
      method: 'PUT',
      body: formData,
    })

    if (res.ok) {
      alert('✅ Produit modifié !')
      window.location.href = '/admin/products'
    } else {
      alert('❌ Erreur à la modification.')
    }
  }

  if (!product) {
    return (
      <AdminShell>
        <p className="text-gray-500">⏳ Chargement en cours...</p>
      </AdminShell>
    )
  }

  return (
    <AdminShell>
      <h1 className="text-2xl font-bold mb-6">✏️ Modifier : {product.name}</h1>

      {product.image && (
        <img
          src={`/uploads/${product.image}`}
          alt={product.name}
          className="w-32 h-32 object-cover rounded-xl mb-4"
        />
      )}

      <ProductForm initialData={product} onSubmit={handleSubmit} />
    </AdminShell>
  )
}
