'use client'

import AdminShell from '@/components/AdminShell'

const colors = [
  'primary',
  'accent',
  'danger',
  'success',
  'smithair',
  'smithair-dark',
  'backdrop',
]

const typography = [
  { label: 'Font Sans', className: 'font-sans' },
  { label: 'Font Display', className: 'font-display' },
  { label: 'Text XS', className: 'text-xs' },
  { label: 'Text SM', className: 'text-sm' },
  { label: 'Text Base', className: 'text-base' },
  { label: 'Text LG', className: 'text-lg' },
  { label: 'Text XL', className: 'text-xl' },
]

export default function StyleGuidePage() {
  return (
    <AdminShell>
      <h1 className="text-2xl font-bold mb-6">🎨 Guide de Style – Smithair</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Couleurs</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {colors.map((color) => (
            <div key={color} className={`p-4 rounded-xl bg-${color} text-white shadow text-sm`}>
              .bg-{color}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Typographie</h2>
        <div className="space-y-2">
          {typography.map((item, i) => (
            <p key={i} className={item.className}>
              {item.label} – class: <code>{item.className}</code>
            </p>
          ))}
        </div>
      </section>
    </AdminShell>
  )
}
