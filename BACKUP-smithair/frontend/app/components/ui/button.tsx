import React from 'react'

export function Button({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-[#0f172a] text-white rounded hover:bg-[#1e293b] transition"
    >
      {children}
    </button>
  )
}
