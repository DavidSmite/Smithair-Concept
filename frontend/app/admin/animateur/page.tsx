'use client'

import { useState } from 'react'
import AdminShell from '@/components/AdminShell'

export default function CustomMotionEditor() {
  const [keyframes, setKeyframes] = useState(`@keyframes pop {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}`)

  const [className, setClassName] = useState('animate-custom')

  return (
    <AdminShell>
      <h1 className="text-2xl font-bold mb-6">🎨 Animateur Royal – Motion Creator</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium text-sm">🎯 Nom de la classe (sans le point)</label>
          <input
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="w-full border p-2 rounded text-sm font-mono"
            placeholder="animate-pop"
          />

          <label className="block mt-4 mb-2 font-medium text-sm">🧠 Keyframes personnalisées</label>
          <textarea
            value={keyframes}
            onChange={(e) => setKeyframes(e.target.value)}
            rows={10}
            className="w-full border p-2 rounded font-mono text-sm"
          />
        </div>

        <div>
          <h2 className="text-sm font-semibold mb-2">✨ Aperçu</h2>
          <style>
            {`${keyframes}

.${className} {
  animation: ${keyframes.match(/@keyframes\s+(\w+)/)?.[1]} 0.5s ease-in-out;
}`}
          </style>
          <div
            className={`p-6 border rounded-xl bg-white dark:bg-gray-800 text-center shadow mt-2 ${className}`}
          >
            🌀 Animation personnalisée
          </div>
        </div>
      </div>
    </AdminShell>
  )
}
