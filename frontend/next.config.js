/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {} // ✅ Correction ici (objet au lieu d'un booléen)
  }
};

module.exports = nextConfig;
