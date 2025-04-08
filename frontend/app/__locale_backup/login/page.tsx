'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function LoginPage({ params }: { params: { locale: string } }) {
  const { locale } = params
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()
      console.log('🧠 Données reçues :', data)

      if (res.ok && data.role) {
        const redirectPath = `/${locale}/${data.role === 'admin' ? 'admin' : 'products'}`
        console.log('➡️ Redirection vers :', redirectPath)

        toast.success(`Bienvenue Capitaine Smite 👑`, { icon: '🚀' })

        // Redirection Next.js (souple)
        router.push(redirectPath)

        // Redirection forcée si jamais router.push échoue
        setTimeout(() => {
          window.location.href = redirectPath
        }, 1500)
      } else {
        setError(data.message || 'Erreur de connexion.')
      }
    } catch (err) {
      console.error('❌ Erreur réseau :', err)
      setError('Erreur réseau ou serveur.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-6">Connexion Admin</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  )
}
