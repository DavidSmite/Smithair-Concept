/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: false, // Corrige l'erreur "Expected object, received boolean"
  },
};

module.exports = nextConfig;

