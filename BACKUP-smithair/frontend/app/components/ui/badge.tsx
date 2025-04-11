import React from 'react'

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium bg-yellow-200 text-yellow-800">
      {children}
    </span>
  )
}
