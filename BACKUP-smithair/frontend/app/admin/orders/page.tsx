'use client';

const mockOrders = [
  {
    id: 'CMD001',
    client: 'Joy Smith',
    total: 199,
    statut: 'Payée',
  },
  {
    id: 'CMD002',
    client: 'Maud Brown',
    total: 89,
    statut: 'En attente',
  },
];

export default function OrdersPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">📦 Commandes</h1>
      <table className="w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Référence</th>
            <th className="p-3 border">Client</th>
            <th className="p-3 border">Montant (€)</th>
            <th className="p-3 border">Statut</th>
          </tr>
        </thead>
        <tbody>
          {mockOrders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="p-3 border">{order.id}</td>
              <td className="p-3 border">{order.client}</td>
              <td className="p-3 border">{order.total}</td>
              <td className="p-3 border">{order.statut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
