'use client'

import { useState } from 'react'
import AdminShell from '@/components/AdminShell'
import { usePromptFromTitle } from '@/lib/ogPromptForge'

export default function OGBuilderPage() {
  const [title, setTitle] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const prompt = usePromptFromTitle(title)

  const generate = async () => {
    const res = await fetch(`/api/og-image?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(prompt)}`)
    const data = await res.json()
    setImageUrl(data.imageUrl)
  }

  return (
    <AdminShell>
      <h1 className="text-2xl font-bold mb-6">🖼️ Générateur OG – Smithair</h1>
      <div className="space-y-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre de la page (ex: Nos Perruques)"
          className="w-full p-2 border rounded"
        />
        <button
          onClick={generate}
          className="px-4 py-2 bg-primary text-white rounded"
        >
          ⚡ Générer l'image OG
        </button>

        {imageUrl && (
          <div className="mt-6">
            <p className="text-sm text-gray-500">Image générée :</p>
            <img src={imageUrl} alt="OG Image" className="w-full max-w-xl rounded shadow" />
          </div>
        )}
      </div>
    </AdminShell>
  )
}
