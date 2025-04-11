'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AddProductForm from './AddProductForm';

type Product = {
  _id: string;
  name: string;
  type: string;
  length: string;
  price: number;
  stock: number;
  isActive: boolean;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/products');
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error('Erreur lors de la récupération des perruques :', err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm('Supprimer cette perruque ?');
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:4000/api/products/${id}`, {
        method: 'DELETE',
      });
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error('Erreur suppression :', err);
    }
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.type.toLowerCase().includes(query.toLowerCase())
  );

  const handleExport = () => {
    const headers = ['Nom', 'Type', 'Longueur', 'Prix', 'Stock', 'Statut'];
    const rows = products.map(p => [
      p.name, p.type, p.length, p.price, p.stock, p.isActive ? 'Actif' : 'Inactif'
    ]);
    const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'perruques-smithhair.csv');
    link.click();
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">🛍️ Gestion des perruques</h1>

      <AddProductForm onAdded={() => window.location.reload()} />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="🔍 Rechercher par nom ou type"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded w-full max-w-md"
        />
        <button
          onClick={handleExport}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          📤 Exporter en CSV
        </button>
      </div>

      {loading ? (
        <p>Chargement en cours...</p>
      ) : filtered.length === 0 ? (
        <p>Aucune perruque correspondante.</p>
      ) : (
        <table className="w-full border border-gray-300 text-left text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border">Nom</th>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Longueur</th>
              <th className="p-3 border">Prix (€)</th>
              <th className="p-3 border">Stock</th>
              <th className="p-3 border">Statut</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((wig) => (
              <tr key={wig._id} className="hover:bg-gray-50">
                <td className="p-3 border">{wig.name}</td>
                <td className="p-3 border">{wig.type}</td>
                <td className="p-3 border">{wig.length}</td>
                <td className="p-3 border">{wig.price}€</td>
                <td className="p-3 border">{wig.stock}</td>
                <td className="p-3 border space-y-1 space-x-1">
                  {wig.isActive ? (
                    <span className="bg-green-100 text-green-800 px-2 py-1 text-xs rounded-full">Actif</span>
                  ) : (
                    <span className="bg-red-100 text-red-800 px-2 py-1 text-xs rounded-full">Inactif</span>
                  )}
                  {wig.stock <= 5 && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs rounded-full">⚠️ Stock faible</span>
                  )}
                </td>
                <td className="p-3 border flex space-x-2">
                  <button
                    onClick={() => router.push(`/admin/products/${wig._id}/edit`)}
                    className="text-blue-600 hover:underline"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(wig._id)}
                    className="text-red-600 hover:underline"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
