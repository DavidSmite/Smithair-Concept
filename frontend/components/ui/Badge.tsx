'use client'

export default function Badge({ label, color = 'gray' }: { label: string; color?: string }) {
  return (
    <span className={`inline-block px-2 py-1 text-xs font-medium rounded bg-${color}-100 text-${color}-800`}>
      {label}
    </span>
  )
}
