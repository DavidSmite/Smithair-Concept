'use client'

import { useTheme } from '@/app/context/ThemeProvider'
import { Moon, Sun } from 'lucide-react'

export default function ThemeSwitcherFloating() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 bg-white dark:bg-[#0f172a] p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-110 transition"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
}

