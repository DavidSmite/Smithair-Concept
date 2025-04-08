'use client'

import Head from 'next/head'
import { useEffect, useState } from 'react'

type MetaProps = {
  title?: string
  description?: string
  url?: string
}

export default function MetaHead({
  title = 'Smithair Concept',
  description = 'Perruques de luxe pour femmes afro-européennes',
  url = 'https://ton-domaine.com',
}: MetaProps) {
  const [image, setImage] = useState<string | null>(null)

  useEffect(() => {
    const fetchOG = async () => {
      const res = await fetch(`/api/og-image?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`)
      const data = await res.json()
      setImage(data.imageUrl)
    }
    fetchOG()
  }, [title, description])

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:url" content={url} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Visuel global */}
      <meta name="theme-color" content="#111827" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
