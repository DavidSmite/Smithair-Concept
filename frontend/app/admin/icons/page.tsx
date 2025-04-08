'use client'

import AdminShell from '@/components/AdminShell'

const icons = ['👑', '🧠', '💳', '🛍️', '📦', '📊', '🔥', '⚡️', '🎉', '🧹', '📥', '💈', '💅', '💬']

export default function IconsPage() {
  return (
    <AdminShell>
      <h1 className="text-2xl font-bold mb-6">🧩 IconDeck</h1>
      <div className="grid grid-cols-6 gap-4 text-3xl">
        {icons.map((icon, i) => (
          <span key={i} className="p-4 border rounded-xl text-center bg-white dark:bg-gray-800 shadow">
            {icon}
          </span>
        ))}
      </div>
    </AdminShell>
  )
}
