'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function VerifyPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')

  useEffect(() => {
    const verifyToken = async () => {
      const token = searchParams.get('token')
      const email = searchParams.get('email')

      if (!token || !email) {
        setStatus('error')
        return
      }

      try {
        const res = await fetch('http://localhost:4000/api/auth/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token, email })
        })

        if (res.ok) {
          setStatus('success')
          setTimeout(() => {
            router.push('/admin')
          }, 1000)
        } else {
          const data = await res.json()
          console.error('Erreur de vérification :', data)
          setStatus('error')
        }
      } catch (err) {
        console.error('Erreur réseau :', err)
        setStatus('error')
      }
    }

    verifyToken()
  }, [searchParams, router])

  return (
    <div className="p-10 text-center">
      {status === 'loading' && <p className="text-gray-500">🔄 Vérification en cours...</p>}
      {status === 'success' && <p className="text-green-600 font-bold">✅ Connexion vérifiée !<br />Redirection en cours...</p>}
      {status === 'error' && <p className="text-red-600 font-bold">❌ Échec de vérification du lien.</p>}
    </div>
  )
}
