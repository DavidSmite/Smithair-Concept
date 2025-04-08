'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full mt-12 py-8 border-t bg-gray-50 dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center md:text-left">
          © {year} Smithair Concept. Tous droits réservés.
        </p>
        <nav className="flex flex-wrap gap-4 text-sm justify-center">
          <a href="/politique-de-confidentialite" className="hover:underline">Politique de confidentialité</a>
          <a href="/mentions-legales" className="hover:underline">Mentions légales</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
