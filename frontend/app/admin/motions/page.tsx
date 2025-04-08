'use client'

import AdminShell from '@/components/AdminShell'

const animations = [
  { name: 'slide-in', label: 'Slide In' },
  { name: 'bounce-in', label: 'Bounce In' },
  { name: 'fade-in', label: 'Fade In' },
  { name: 'flip', label: 'Flip' },
]

export default function MotionGalleryPage() {
  return (
    <AdminShell>
      <h1 className="text-2xl font-bold mb-6">🎞️ Motion Gallery – Animations Royale</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        Voici un aperçu des animations Smithair intégrées à Tailwind via le MotionPack.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {animations.map((anim) => (
          <div
            key={anim.name}
            className={`p-6 rounded-xl shadow bg-white dark:bg-gray-800 border animate-${anim.name}`}
          >
            <p className="font-bold text-lg mb-2">{anim.label}</p>
            <div className="h-16 w-full flex items-center justify-center rounded bg-primary text-white font-semibold">
              .animate-{anim.name}
            </div>
          </div>
        ))}
      </div>
    </AdminShell>
  )
}
