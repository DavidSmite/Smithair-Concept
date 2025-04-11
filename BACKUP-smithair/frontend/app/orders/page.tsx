'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([])

  useEffect(() => {
    // ⚠️ À remplacer par fetch('/api/orders') plus tard
    const mockOrders = [
      {
        id: 'A001',
        customer: 'Joy A.',
        date: '2025-03-01',
        total: 129.99,
        status: 'expédiée',
      },
      {
        id: 'A002',
        customer: 'Maud S.',
        date: '2025-03-03',
        total: 89.5,
        status: 'en attente',
      },
      {
        id: 'A003',
        customer: 'Will D.',
        date: '2025-03-05',
        total: 145.0,
        status: 'annulée',
      },
    ]
    setOrders(mockOrders)
  }, [])

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)
  const avgBasket = orders.length ? totalRevenue / orders.length : 0

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'expédiée':
        return <Badge className="bg-green-600">Expédiée</Badge>
      case 'en attente':
        return <Badge className="bg-yellow-500 text-black">En attente</Badge>
      case 'annulée':
        return <Badge className="bg-red-600">Annulée</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">📦 Commandes</h1>

      <Card>
        <CardContent className="p-4 space-y-1 text-sm text-gray-600">
          <p>Nombre total : <strong>{orders.length}</strong></p>
          <p>Revenu généré : <strong>{totalRevenue.toFixed(2)} €</strong></p>
          <p>Panier moyen : <strong>{avgBasket.toFixed(2)} €</strong></p>
        </CardContent>
      </Card>

      <div className="overflow-auto border rounded shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 border-b text-gray-700">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Client</th>
              <th className="p-2">Date</th>
              <th className="p-2">Total</th>
              <th className="p-2">Statut</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-2 font-medium">{order.id}</td>
                <td className="p-2">{order.customer}</td>
                <td className="p-2">{order.date}</td>
                <td className="p-2">{order.total.toFixed(2)} €</td>
                <td className="p-2">{getStatusBadge(order.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
