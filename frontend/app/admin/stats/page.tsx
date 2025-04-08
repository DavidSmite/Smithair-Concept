'use client'

import AdminShell from '@/components/AdminShell'

export default function StatsPage() {
  return (
    <AdminShell>
      <h1 className="text-2xl font-bold mb-6">📊 Tableau de Bord (Mock)</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <p className="text-gray-500 text-sm mb-2">Ventes</p>
          <h2 className="text-3xl font-bold">1 238 €</h2>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <p className="text-gray-500 text-sm mb-2">Clients</p>
          <h2 className="text-3xl font-bold">342</h2>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <p className="text-gray-500 text-sm mb-2">Commandes</p>
          <h2 className="text-3xl font-bold">89</h2>
        </div>
      </div>
    </AdminShell>
  )
}
