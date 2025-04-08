'use client'

import { ReactNode } from 'react'

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl shadow bg-white dark:bg-gray-800 p-4 border dark:border-gray-700">
      {children}
    </div>
  )
}
