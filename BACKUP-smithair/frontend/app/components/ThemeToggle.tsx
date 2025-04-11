'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (stored) {
      setTheme(stored as 'light' | 'dark')
      document.documentElement.classList.toggle('dark', stored === 'dark')
    } else {
      setTheme(system ? 'dark' : 'light')
      document.documentElement.classList.toggle('dark', system)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }

  return (
    <button onClick={toggleTheme} className="p-2 hover:scale-105 transition">
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
}
