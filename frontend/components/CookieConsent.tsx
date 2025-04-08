'use client'

import { useEffect, useState } from 'react'

type Props = {
  locale?: string
}

export default function CookieConsent({ locale = 'fr' }: Props) {
  const [consent, setConsent] = useState(false)
  const [t, setT] = useState<{ msg: string } | undefined>()

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookie-consent')
    if (storedConsent === 'true') {
      setConsent(true)
    }

    const translations: Record<string, string> = {
      fr: "Ce site utilise des cookies pour améliorer votre expérience.",
      en: "This site uses cookies to enhance your experience.",
    }

    setT({ msg: translations[locale] || translations['fr'] })
  }, [locale])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true')
    setConsent(true)
  }

  if (consent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex flex-col md:flex-row justify-between items-center z-50 gap-2">
      <p>{t?.msg ?? "Ce site utilise des cookies pour améliorer votre expérience."}</p>
      <button
        onClick={accept}
        className="bg-white text-gray-900 px-4 py-1 rounded hover:bg-gray-200 transition"
      >
        Accepter
      </button>
    </div>
  )
}
