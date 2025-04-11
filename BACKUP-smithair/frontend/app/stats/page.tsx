'use client'

import { useEffect, useState } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { saveAs } from 'file-saver'

Chart.register(...registerables)

export default function StatsPage() {
  const [stats, setStats] = useState<any>(null)

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch('/api/stats')
      const data = await res.json()
      setStats(data)
    }
    fetchStats()
  }, [])

  const exportCSV = () => {
    if (!stats) return
    let csv = 'Mois,Revenus (€),Commandes,Visites\n'
    stats.revenuesByMonth.forEach((r: any) => {
      csv += `${r.month},${r.total},${r.orders},${r.visits}\n`
    })
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    saveAs(blob, 'statistiques-smithair.csv')
  }

  if (!stats) return <div className="p-6 text-center">Chargement...</div>

  const revenueData = {
    labels: stats.revenuesByMonth.map((r: any) => r.month),
    datasets: [{ label: 'Revenus €', data: stats.revenuesByMonth.map((r: any) => r.total), borderColor: 'rgba(75,192,192,1)' }]
  }

  const topProductsData = {
    labels: stats.topProducts.map((p: any) => p.name),
    datasets: [{ label: 'Quantité vendue', data: stats.topProducts.map((p: any) => p.quantitySold), backgroundColor: 'rgba(153,102,255,0.6)' }]
  }

  const topClientsData = {
    labels: stats.topClients.map((c: any) => c.name),
    datasets: [{ label: 'Total dépensé €', data: stats.topClients.map((c: any) => c.totalSpent), backgroundColor: 'rgba(255,159,64,0.6)' }]
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">📊 Statistiques</h1>

      <button onClick={exportCSV} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        📤 Exporter les statistiques (.CSV)
      </button>

      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Revenus mensuels</h2>
            <Line data={revenueData} />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Top 5 Produits Vendus</h2>
            <Bar data={topProductsData} />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Top Clients</h2>
            <Bar data={topClientsData} />
            <ul className="mt-4 list-disc list-inside text-sm text-muted">
              {stats.topClients.map((client: any, index: number) => (
                <li key={index}>
                  {client.name} – {client.totalSpent.toFixed(2)} € sur {client.orderCount} commandes
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
