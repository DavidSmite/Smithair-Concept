'use client'

import { Toaster } from 'react-hot-toast'
import CookieConsent from '@/components/CookieConsent'
import Footer from '@/components/Footer'

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster position="top-center" />
      {children}
      <CookieConsent locale="fr" />
      <Footer />
    </>
  )
}
