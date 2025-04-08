'use client'

import { useEffect, useState } from 'react'
import AdminShell from '@/components/AdminShell'

type AnimationPreset = {
  className: string
  keyframes: string
}

export default function AnimateSaveDeck() {
  const [keyframes, setKeyframes] = useState(`@keyframes pop {
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}`)
  const [className, setClassName] = useState('animate-pop')
  const [presets, setPresets] = useState<AnimationPreset[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('animation-presets')
    if (saved) setPresets(JSON.parse(saved))
  }, [])

  const saveAnimation = () => {
    const newPreset = { className, keyframes }
    const updated = [...presets, newPreset]
    setPresets(updated)
    localStorage.setItem('animation-presets', JSON.stringify(updated))
  }

  const removePreset = (cls: string) => {
    const filtered = presets.filter((p) => p.className !== cls)
    setPresets(filtered)
    localStorage.setItem('animation-presets', JSON.stringify(filtered))
  }

  const exportCSS = () => {
    const cssExport = presets.map((p) => {
      const match = p.keyframes.match(/@keyframes\s+(\w+)/)
      const name = match?.[1] || 'custom'
      return `${p.keyframes}\n\n.${p.className} {\n  animation: ${name} 0.5s ease-in-out;\n}`
    }).join('\n\n')

    const blob = new Blob([cssExport], { type: 'text/css' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'smithair-animations.css'
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <AdminShell>
      <h1 className="text-2xl font-bold mb-6">📦 AnimateSaveDeck – Bibliothèque Royale</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium text-sm">🎯 Nom de la classe</label>
          <input
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="w-full border p-2 rounded text-sm font-mono"
          />

          <label className="block mt-4 mb-2 font-medium text-sm">🧠 Keyframes personnalisées</label>
          <textarea
            value={keyframes}
            onChange={(e) => setKeyframes(e.target.value)}
            rows={10}
            className="w-full border p-2 rounded font-mono text-sm"
          />

          <button
            onClick={saveAnimation}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            💾 Enregistrer cette animation
          </button>
        </div>

        <div>
          <h2 className="text-sm font-semibold mb-2">✨ Aperçu immédiat</h2>
          <style>
            {`${keyframes}
.${className} {
  animation: ${keyframes.match(/@keyframes\s+(\w+)/)?.[1]} 0.5s ease-in-out;
}`}
          </style>
          <div className={`p-6 mt-2 rounded-xl border bg-white dark:bg-gray-800 text-center ${className}`}>
            🌀 Animation en direct
          </div>
        </div>
      </div>

      {/* 📤 Bouton export CSS */}
      <div className="mt-12 mb-6">
        <button
          onClick={exportCSS}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
        >
          📤 Exporter toutes les animations en CSS
        </button>
      </div>

      {/* 📚 Liste des animations sauvegardées */}
      <div className="mb-20">
        <h2 className="text-xl font-semibold mb-4">📚 Animations enregistrées</h2>
        {presets.length === 0 ? (
          <p className="text-sm text-gray-500">Aucune animation enregistrée pour le moment.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-4">
            {presets.map((preset, i) => (
              <div key={i} className="p-4 border rounded-xl bg-white dark:bg-gray-800">
                <p className="font-semibold text-sm mb-2">{preset.className}</p>
                <style>
                  {`${preset.keyframes}
.${preset.className} {
  animation: ${preset.keyframes.match(/@keyframes\s+(\w+)/)?.[1]} 0.5s ease-in-out;
}`}
                </style>
                <div className={`${preset.className} p-4 text-center bg-gray-100 rounded`}>
                  👁️ Aperçu
                </div>
                <div className="flex justify-between items-center mt-3">
                  <button
                    onClick={() => {
                      setKeyframes(preset.keyframes)
                      setClassName(preset.className)
                    }}
                    className="text-xs text-blue-600 hover:underline"
                  >
                    🔁 Appliquer
                  </button>
                  <button
                    onClick={() => removePreset(preset.className)}
                    className="text-xs text-red-600 hover:underline"
                  >
                    ❌ Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminShell>
  )
}
