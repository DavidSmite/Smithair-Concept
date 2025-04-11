'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-10 max-w-3xl mx-auto text-center bg-white dark:bg-[#0f172a] text-black dark:text-white rounded-lg shadow-lg space-y-6"
    >
      <h1 className="text-4xl font-bold">Bienvenue sur <span className="text-yellow-500">Smithair Concept</span></h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Une marque, une vision, un héritage 🖤
      </p>

      <p className="text-md text-gray-600 dark:text-gray-400">
        Découvrez nos perruques sans colle, pensées pour les femmes afro-européennes, entre confort, élégance et liberté.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <Link href="/products">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-[#0f172a] px-6 py-2 rounded font-semibold shadow transition">
            🛍️ Voir les perruques
          </button>
        </Link>
        <Link href="/admin">
          <button className="border border-white px-6 py-2 rounded text-white hover:bg-white hover:text-[#0f172a] transition">
            👑 Espace Admin
          </button>
        </Link>
      </div>
    </motion.div>
  )
}
