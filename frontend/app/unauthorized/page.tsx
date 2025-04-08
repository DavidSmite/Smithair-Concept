'use client'

import { useEffect, useState } from 'react'

export default function UnauthorizedPage() {
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((c) => c - 1)
    }, 1000)

    const timeout = setTimeout(() => {
      window.location.href = '/'
    }, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-red-50 dark:bg-red-900 text-red-800 dark:text-white transition-all animate-fade-in">
      <h1 className="text-3xl font-bold mb-3">🚫 Accès Refusé</h1>
      <p className="text-base mb-4">
        Tu n’as pas les droits pour accéder à cette page.<br />
        Si tu es Admin, connecte-toi avec les bons identifiants.
      </p>

      <p className="text-sm text-gray-700 dark:text-gray-200 mb-2">
        🔄 Redirection automatique dans <strong>{countdown}</strong> secondes…
      </p>

      <a
        href="/"
        className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition"
      >
        🏠 Retour à l’accueil maintenant
      </a>
    </div>
  )
}
