'use client';

import { useState } from 'react';

export default function AddProductForm({ onAdded }: { onAdded: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    length: '',
    price: '',
    stock: '',
    isActive: true,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:4000/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          stock: parseInt(formData.stock),
        }),
      });

      if (res.ok) {
        onAdded();
        setFormData({
          name: '',
          type: '',
          length: '',
          price: '',
          stock: '',
          isActive: true,
        });
      } else {
        const data = await res.json();
        alert(data.message || 'Erreur lors de l’ajout.');
      }
    } catch (error) {
      alert('Erreur réseau');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        name="name"
        placeholder="Nom"
        value={formData.name}
        onChange={handleChange}
        className="p-2 border rounded"
        required
      />
      <input
        type="text"
        name="type"
        placeholder="Type"
        value={formData.type}
        onChange={handleChange}
        className="p-2 border rounded"
        required
      />
      <input
        type="text"
        name="length"
        placeholder="Longueur"
        value={formData.length}
        onChange={handleChange}
        className="p-2 border rounded"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Prix (€)"
        value={formData.price}
        onChange={handleChange}
        className="p-2 border rounded"
        required
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={formData.stock}
        onChange={handleChange}
        className="p-2 border rounded"
        required
      />
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="isActive"
          checked={formData.isActive}
          onChange={handleChange}
        />
        <span>Actif</span>
      </label>

      <button
        type="submit"
        className="md:col-span-2 bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
        disabled={loading}
      >
        {loading ? 'Ajout en cours...' : 'Ajouter la perruque'}
      </button>
    </form>
  );
}
