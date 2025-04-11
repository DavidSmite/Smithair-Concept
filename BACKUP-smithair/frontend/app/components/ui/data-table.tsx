import React from 'react'

export function DataTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="border rounded p-4 w-full overflow-auto">
      {children}
    </div>
  )
}
