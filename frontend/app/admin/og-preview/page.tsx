'use client'

import { useState, useEffect } from 'react'
import AdminShell from '@/components/AdminShell'

export default function OGPreviewPage() {
  const [title, setTitle] = useState('Nos perruques – Smithair')
  const [description, setDescription] = useState('Découvrez notre collection de perruques de luxe afro-européennes.')
  const [url, setUrl] = useState('https://ton-domaine.com/wigs')
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    const fetchImage = async () => {
      const res = await fetch(`/api/og-image?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`)
      const data = await res.json()
      setImageUrl(data.imageUrl)
    }

    fetchImage()
  }, [title, description])

  return (
    <AdminShell>
      <h1 className="text-2xl font-bold mb-6">📸 Prévisualisation OG – Smithair</h1>

      <div className="space-y-4 max-w-2xl mx-auto">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre"
          className="w-full p-2 border rounded"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 border rounded"
        />
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="URL"
          className="w-full p-2 border rounded"
        />

        <div className="mt-6 space-y-2">
          <p className="text-sm text-gray-500">Image générée :</p>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Prévisualisation OG"
              className="w-full max-w-xl rounded shadow"
            />
          ) : (
            <p className="text-gray-400 text-sm italic">Chargement...</p>
          )}
          <p className="text-xs mt-2 break-all text-gray-500">
            🔗 {imageUrl}
          </p>
        </div>
      </div>
    </AdminShell>
  )
}
