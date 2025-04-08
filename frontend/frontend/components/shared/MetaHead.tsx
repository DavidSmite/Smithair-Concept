import Head from 'next/head'

type MetaProps = {
  title?: string
  description?: string
  image?: string
  url?: string
}

export default function MetaHead({
  title = 'Smithair Concept',
  description = 'Perruques de luxe pour femmes afro-européennes',
  image = 'https://ton-domaine.com/og-smithair.jpg',
  url = 'https://ton-domaine.com',
}: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* OG */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon & Theme */}
      <meta name="theme-color" content="#111827" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
