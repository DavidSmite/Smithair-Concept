'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

export default function ContactPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    const result = await res.json()
    setSending(false)

    if (result.success) {
      toast.success('✅ Message envoyé !')
      router.push('/merci')
    } else {
      toast.error('❌ Une erreur est survenue.')
    }
  }

  return (
    <main className="max-w-xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-bold text-rose-600 text-center">Contactez-nous</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded"
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full border border-gray-300 p-3 rounded"
        />
        <button
          type="submit"
          disabled={sending}
          className="w-full bg-rose-600 text-white py-3 rounded hover:bg-rose-700 transition"
        >
          {sending ? 'Envoi en cours...' : 'Envoyer'}
        </button>
      </form>
    </main>
  )
}
