'use client'

export default function OGGallery() {
  const images = [
    'og-home.jpg',
    'og-wigs.jpg',
    'og-checkout.jpg',
    'og-contact.jpg',
    'og-default.jpg',
  ]

  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">📸 Galerie OG Smithair</h1>
      <p className="mb-4 text-sm text-gray-600">
        Ces images sont utilisées lors des partages sur les réseaux sociaux (Twitter, Facebook, LinkedIn, WhatsApp...).
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div key={i} className="border rounded shadow p-2">
            <img
              src={`/images/og/${img}`}
              alt={img}
              className="w-full object-cover rounded mb-2"
            />
            <p className="text-sm text-center">{img}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
