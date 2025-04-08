'use client'

import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ children, onClick, className = '', type = 'button' }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition ${className}`}
    >
      {children}
    </button>
  )
}
