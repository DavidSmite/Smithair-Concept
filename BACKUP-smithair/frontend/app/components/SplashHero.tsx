'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SplashHero() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 bg-[#0f172a] flex flex-col items-center justify-center text-white"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 180 }}
            className="text-center space-y-2"
          >
            <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 12h16M4 12l4 4M4 12l4-4"
                stroke="#facc15"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="text-2xl font-bold">Smithair Concept</h1>
            <p className="text-sm text-gray-300">Chargement...</p>
          </motion.div>

          <motion.div
            className="mt-6 border-t-4 border-yellow-400 border-solid rounded-full w-8 h-8 animate-spin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
