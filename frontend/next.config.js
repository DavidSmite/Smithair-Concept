/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, // recommandé avec 'output: export' pour éviter les erreurs d'images
  },
}

export default nextConfig
