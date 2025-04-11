'use client'

import { motion } from 'framer-motion'

export default function DashboardPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-8 space-y-6 bg-white dark:bg-[#0f172a] text-black dark:text-white rounded-lg shadow-md"
    >
      {/* Bannière Royale Glow 🌟 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#0f172a] py-3 rounded shadow dark:shadow-yellow-500/40 dark:ring-1 dark:ring-yellow-400"
      >
        👑 Bienvenue Chef Gargantua
      </motion.div>

      <p className="text-gray-600 dark:text-gray-300">
        Voici les données stratégiques de ta couronne digitale.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded shadow">
          📦 <strong>27</strong> commandes en cours
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded shadow">
          🛍️️ <strong>54</strong> perruques en stock
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded shadow">
          💰 <strong>12 340 €</strong> générés ce mois-ci
        </div>
      </div>
    </motion.div>
  )
}
