'use client'

import AdminShell from '@/components/AdminShell'
import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

type SaleStat = {
  product: string
  totalSold: number
  revenue: number
}

export default function StatsPage() {
  const [stats, setStats] = useState<SaleStat[]>([])

  useEffect(() => {
    // Mock stats (peut être remplacé par un fetch vers une vraie route plus tard)
    setStats([
      { product: 'Sunshine Fro', totalSold: 15, revenue: 1499.85 },
      { product: 'Urban Bob', totalSold: 9, revenue: 805.50 },
      { product: 'Tropik Waves', totalSold: 5, revenue: 699.95 },
      { product: 'Silk Touch', totalSold: 3, revenue: 539.97 },
    ])
  }, [])

  const chartData = {
    labels: stats.map((s) => s.product),
    datasets: [
      {
        label: 'Quantité vendue',
        data: stats.map((s) => s.totalSold),
        backgroundColor: '#6366f1',
      },
    ],
  }

  return (
    <AdminShell>
      <h1 className="text-2xl font-bold mb-6">📈 Statistiques de vente</h1>

      <div className="max-w-4xl mx-auto space-y-8">
        <Bar data={chartData} options={{ responsive: true }} />

        <table className="w-full mt-8 border text-sm bg-white dark:bg-gray-800">
          <thead className="bg-gray-100 dark:bg-gray-700 text-left">
            <tr>
              <th className="p-2">Produit</th>
              <th className="p-2">Quantité</th>
              <th className="p-2">Revenu (€)</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((s, i) => (
              <tr key={i} className="border-t dark:border-gray-700">
                <td className="p-2">{s.product}</td>
                <td className="p-2">{s.totalSold}</td>
                <td className="p-2">{s.revenue.toFixed(2)} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  )
}
