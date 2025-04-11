'use client'

import { motion } from 'framer-motion'

export default function LoaderFade() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
    >
      <p className="text-xl font-semibold text-gray-600">À bientôt Chef… 👋</p>
    </motion.div>
  )
}
