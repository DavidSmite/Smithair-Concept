"use client"; // ✅ Ajouté pour éviter l'erreur 'client-only'

import Image from 'next/image';

export default function HomePage() {
  // Définition des produits avec un typage strict
  const products: { name: string; price: number; image: string }[] = [
    { name: 'Chaussures de sport', price: 49.99, image: '/images/shoes.jpg' },
    { name: 'T-shirt', price: 19.99, image: '/images/tshirt.jpg' },
  ];

  return (
    <main className="container">
      <h1 className="title">Bienvenue sur Smithair Concept</h1>

      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="product-image"
            />
            <h2>{product.name}</h2>
            <p className="price">💰 {product.price.toFixed(2)} €</p>
          </div>
        ))}
      </div>
    </main>
  );
}
