'use client'

import Image from 'next/image'

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black animate-fade-in">
      <Image
        src="/logo-smithair.png"
        alt="Logo Smithair"
        width={120}
        height={120}
        className="animate-bounce"
      />
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-300 animate-fade-in">
        Chargement du royaume...
      </p>
    </div>
  )
}
