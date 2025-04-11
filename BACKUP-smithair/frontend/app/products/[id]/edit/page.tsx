'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);
  const router = useRouter();
  const id = params.id;

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://localhost:4000/api/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handleUpdate = async () => {
    await fetch(`http://localhost:4000/api/products/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    router.push('/products');
  };

  if (!product) {
    return <p className="p-6 text-center">Chargement du produit...</p>;
  }

  return (
    <main className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold mb-4">✏️ Modifier le produit</h1>

      <input
        type="text"
        placeholder="Nom"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        className="w-full border p-2 rounded"
      />

      <input
        type="number"
        placeholder="Prix"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: parseFloat(e.target.value) })}
        className="w-full border p-2 rounded"
      />

      <input
        type="number"
        placeholder="Stock"
        value={product.stock}
        onChange={(e) => setProduct({ ...product, stock: parseInt(e.target.value) })}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        placeholder="Image URL"
        value={product.imageUrl}
        onChange={(e) => setProduct({ ...product, imageUrl: e.target.value })}
        className="w-full border p-2 rounded"
      />

      <textarea
        placeholder="Description"
        value={product.description}
        onChange={(e) =>
          setProduct({ ...product, description: e.target.value })
        }
        className="w-full border p-2 rounded"
      />

      {/* ✅ Ajout de la case à cocher d’activation */}
      <label className="flex items-center gap-2 text-sm font-medium">
        <input
          type="checkbox"
          checked={product.isActive}
          onChange={(e) =>
            setProduct({ ...product, isActive: e.target.checked })
          }
        />
        Activer ce produit
      </label>

      <button
        onClick={handleUpdate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Enregistrer les modifications
      </button>
    </main>
  );
}
