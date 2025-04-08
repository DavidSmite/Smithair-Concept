'use client'

import AdminShell from '@/components/AdminShell'
import ProductForm from '@/components/ProductForm'

export default function AddProductPage() {
  const handleSubmit = async (formData: FormData) => {
    try {
      const res = await fetch('http://localhost:4000/api/products', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) {
        throw new Error(`Erreur serveur : ${res.status}`)
      }

      // Redirection et toast sont déjà gérés dans ProductForm
    } catch (err) {
      console.error('❌ Erreur lors de l’ajout :', err)
      alert('❌ Une erreur est survenue.')
    }
  }

  return (
    <AdminShell>
      <h1 className="text-2xl font-bold mb-6">➕ Ajouter une Perruque</h1>
      <ProductForm onSubmit={handleSubmit} />
    </AdminShell>
  )
}
