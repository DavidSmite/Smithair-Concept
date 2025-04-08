'use client'

import { useEffect, useState } from 'react'

export default function DevPanel() {
  const [timestamp, setTimestamp] = useState('—')

  useEffect(() => {
    const now = new Date()
    setTimestamp(now.toLocaleString())
  }, [])

  return (
    <div className="mt-6 p-4 border border-blue-300 rounded-xl bg-blue-50 dark:bg-blue-900 dark:text-white text-sm shadow">
      <h2 className="text-base font-bold mb-2">🧪 Panneau Dev – Mode local uniquement</h2>
      <ul className="space-y-1">
        <li><strong>🔧 Next.js :</strong> {process.env.NEXT_PUBLIC_VERSION || 'v15.x.x'}</li>
        <li><strong>🗓️ Date :</strong> {timestamp}</li>
        <li><strong>👤 Utilisateur :</strong> Admin (démo)</li>
        <li><strong>🧼 LocalStorage :</strong>
          <button
            onClick={() => {
              localStorage.clear()
              alert('🧹 LocalStorage vidé')
            }}
            className="ml-2 px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
          >
            Vider
          </button>
        </li>
      </ul>
    </div>
  )
}
