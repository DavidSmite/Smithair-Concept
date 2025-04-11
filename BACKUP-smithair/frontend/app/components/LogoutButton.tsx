'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import LoaderFade from '@/app/components/LoaderFade'

export default function LogoutButton() {
  const router = useRouter()
  const [showLoader, setShowLoader] = useState(false)

  const handleLogout = () => {
    setShowLoader(true)
    document.cookie = 'smithair_auth=; Max-Age=0; path=/'
    toast.success('Déconnexion réussie 👑')

    setTimeout(() => {
      router.push('/login')
    }, 1200)
  }

  return (
    <>
      {showLoader && <LoaderFade />}
      <button
        onClick={handleLogout}
        className="text-sm bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Se déconnecter
      </button>
    </>
  )
}
