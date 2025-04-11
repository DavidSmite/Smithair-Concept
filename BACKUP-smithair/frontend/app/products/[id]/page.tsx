import { notFound } from 'next/navigation';

type Product = {
  _id: string;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
};

async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`http://localhost:4000/api/products/${id}`, {
      cache: 'no-store',
    });
    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    console.error("Erreur fetch produit :", err);
    return null;
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) return notFound();

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-auto object-cover rounded mb-4"
        />
      )}
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-blue-600 font-semibold text-lg">{product.price} €</p>
    </main>
  );
}
