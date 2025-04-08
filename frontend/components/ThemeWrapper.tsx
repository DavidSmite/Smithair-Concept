'use client'

import { useEffect, useState } from 'react'

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const match = window.matchMedia('(prefers-color-scheme: dark)')
    setTheme(match.matches ? 'dark' : 'light')
    match.addEventListener('change', (e) => setTheme(e.matches ? 'dark' : 'light'))
    return () => match.removeEventListener('change', () => {})
  }, [])

  return (
    <html lang="fr" className={theme}>
      {children}
    </html>
  )
}
