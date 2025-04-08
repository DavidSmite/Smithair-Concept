'use client'

export default function StatusBadge({ status }: { status: 'new' | 'out' | 'ok' }) {
  const colorMap = {
    new: 'bg-accent text-white',
    out: 'bg-danger text-white',
    ok: 'bg-success text-white',
  }

  const labelMap = {
    new: '🆕 Nouveau',
    out: 'Rupture',
    ok: 'En stock',
  }

  return (
    <span className={`px-2 py-1 text-xs rounded ${colorMap[status]}`}>
      {labelMap[status]}
    </span>
  )
}
