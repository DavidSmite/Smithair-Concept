'use client'

import { FormEvent } from 'react'

export default function ContactPage() {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      alert('Message envoyé avec succès !')
      form.reset()
    } else {
      alert('Erreur lors de l’envoi du message.')
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6">Contactez-nous</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Votre nom" required className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="Votre email" required className="w-full p-2 border rounded" />
        <textarea name="message" placeholder="Votre message" required className="w-full p-2 border rounded" rows={5} />
        <button type="submit" className="px-4 py-2 bg-black text-white rounded">Envoyer</button>
      </form>
    </div>
  )
}
