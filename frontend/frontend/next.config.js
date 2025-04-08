/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  swcMinify: true,
  trailingSlash: false,

  experimental: {
    serverActions: true,
  },

  images: {
    domains: ['localhost'], // Remplace par ton vrai domaine en prod
  },

  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      ],
    },
  ],

  redirects: async () => [
    {
      source: '/admin/messages',
      destination: '/admin/help',
      permanent: false,
    },
  ],
}

module.exports = nextConfig
