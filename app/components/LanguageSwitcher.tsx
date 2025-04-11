'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const toggleLocale = () => {
    const parts = pathname.split('/')
    const currentLocale = parts[1]
    const newLocale = currentLocale === 'fr' ? 'en' : 'fr'
    parts[1] = newLocale
    router.push(parts.join('/'))
  }

  return (
    <div className="absolute top-4 right-4">
      <button
        onClick={toggleLocale}
        className="text-sm bg-white border border-gray-300 rounded-xl px-3 py-1 hover:bg-gray-100 transition shadow"
      >
        🌍 {pathname.startsWith('/fr') ? 'EN 🇬🇧' : 'FR 🇫🇷'}
      </button>
    </div>
  )
}
