'use client'

import { useEffect, useState } from 'react'

export default function RoboNono() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 500)

    console.log('🤖 RoboNono : Capitaine, je suis prêt pour vous servir.')
    console.log('🎂 RoboNono : Joyeux anniversaire Capitaine Smite !')

    return () => clearTimeout(timeout)
  }, [])

  if (!visible) return null

  return (
    <div className="animate-fade-in p-4 bg-gradient-to-br from-yellow-200 to-yellow-100 border border-yellow-400 text-yellow-900 rounded-xl max-w-md mx-auto my-8 shadow-lg transition-transform transform hover:scale-105">
      <p className="text-lg font-bold mb-1">🤖 RoboNono Deluxe</p>
      <p className="text-sm italic">« Capitaine Smite, tout est opérationnel. Et... 🥁</p>
      <p className="text-base font-semibold text-pink-600 mt-2">🎉 Joyeux anniversaire ! 🎉</p>
    </div>
  )
}
