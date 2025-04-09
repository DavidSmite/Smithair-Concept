'use client'

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-pink-100 to-rose-200 text-gray-900 p-8">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
        💇🏽‍♀️ Bienvenue sur <span className="text-rose-600">Smithair Concept</span>
      </h1>
      <p className="text-center text-lg md:text-xl max-w-2xl text-gray-700 mb-6">
        Découvrez notre collection de perruques sans colle, conçues pour sublimer la beauté des femmes afro-européennes.  
        Laissez respirer votre cuir chevelu, sans compromis sur le style.  
      </p>
      <a
        href="/wigs"
        className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-full text-lg transition"
      >
        Découvrir les perruques
      </a>
    </main>
  )
}
