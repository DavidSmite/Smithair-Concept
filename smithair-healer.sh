#!/bin/bash

clear
echo "🧘‍♂️ Smithair Healer™ – Terminal Recovery Suite"
echo "---------------------------------------------"
echo ""
sleep 0.5

echo "💳 Capitaine Smite... Respire."
sleep 1
echo "�� Tu viens d'enchaîner une ligne qui t’a peut-être coûté un ongle."
sleep 1
echo "🩹 Je suis là pour tout réparer."
sleep 1

read -p "🛠️ Quel fichier veux-tu réparer ? (ex: frontend/app/[locale]/login/page.tsx) : " targetFile

if [ ! -f "$targetFile" ]; then
  echo ""
  echo "💥 Le fichier $targetFile n’existe pas encore..."
  echo "📦 Création automatique du dossier parent..."
  mkdir -p "$(dirname "$targetFile")"
fi

echo ""
echo "🧠 Injection d’un fichier propre..."
sleep 1

cat > "$targetFile" << 'EOF'
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage({ params }: { params: { locale: string } }) {
  const { locale } = params
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isFrench = locale === 'fr'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('http://localhost:4000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    })

    const data = await res.json()
    console.log('🧠 Données reçues :', data)

    if (res.ok) {
      if (data.role === 'admin') {
        router.push(`/${locale}/admin`)
      } else {
        router.push(`/${locale}/products`)
      }
    } else {
      setError(data.message || 'Erreur de connexion.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {isFrench ? 'Connexion Admin' : 'Admin Login'}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {isFrench ? 'Email' : 'Email'}
            </label>
            <input
              type="email"
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              {isFrench ? 'Mot de passe' : 'Password'}
            </label>
            <input
              type="password"
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {isFrench ? 'Se connecter' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}
EOF

echo ""
echo "✅ Le fichier a été régénéré proprement !"
echo "🧘‍♂️ Tu peux te redresser. Le terminal te respecte à nouveau."
echo "🎶 Conseil : bois un verre d’eau, envoie un commit, et respire profondément."
