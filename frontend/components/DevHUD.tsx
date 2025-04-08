'use client'

import { useState, useEffect } from 'react'
import DevPanel from './DevPanel'

export default function DevHUD() {
  const [visible, setVisible] = useState(false)
  const [isDev, setIsDev] = useState(false)

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      setIsDev(true)
    }
  }, [])

  if (!isDev) return null

  return (
    <>
      {visible && (
        <div className="fixed bottom-20 right-4 z-50 max-w-sm w-full animate-slide-in">
          <DevPanel />
        </div>
      )}

      <button
        onClick={() => setVisible(!visible)}
        className="fixed bottom-4 right-4 z-50 px-4 py-2 bg-blue-600 text-white text-sm rounded-full shadow-lg hover:bg-blue-700 transition"
        title="Afficher/Masquer DevPanel"
      >
        ⚙️ DevTools
      </button>
    </>
  )
}
