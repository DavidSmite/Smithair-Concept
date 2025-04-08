'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const effects = [
  'animate-bounce',
  'animate-spin',
  'animate-pulse',
  'hover:animate-wiggle',
  'animate-fade-in',
  'animate-spin-slow',
]

export default function LogoRandom() {
  const [fx, setFx] = useState('')

  useEffect(() => {
    const random = effects[Math.floor(Math.random() * effects.length)]
    setFx(random)
  }, [])

  return (
    <a href="/" className="block transition-all duration-300">
      <Image
        src="/logo-smithair.png"
        alt="Logo Smithair"
        width={60}
        height={60}
        className={fx}
        priority
      />
    </a>
  )
}
