'use client'

import { useState } from 'react'
import AdminShell from '@/components/AdminShell'

const animations = ['slide-in', 'bounce-in', 'fade-in', 'flip']

export default function MotionPlayground() {
  const [selected, setSelected] = useState('slide-in')
  const [key, setKey] = useState(0) // force remount

  return (
    <AdminShell>
      <h1 className="text-2xl font-bold mb-6">🎛️ Motion Playground</h1>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Sélectionne une animation :</label>
        <select
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value)
            setKey((k) => k + 1)
          }}
          className="p-2 border rounded"
        >
          {animations.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8">
        <div
          key={key} // force la relance de l'animation
          className={`w-full max-w-md mx-auto p-6 rounded-xl border shadow text-center bg-white dark:bg-gray-800 animate-${selected}`}
        >
          <p className="text-xl font-semibold mb-2">💫 Animation active</p>
          <p className="text-sm text-gray-500 dark:text-gray-300">.animate-{selected}</p>
        </div>
      </div>
    </AdminShell>
  )
}
