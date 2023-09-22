/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/brands/undefined',
        destination: '/',
        permanent: true,
      },
      {
        source: '/brands/null',
        destination: '/',
        permanent: true,
      },
    ]
  },
  experimental: {
    appDir: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.mypop.in',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
      {
        protocol: 'https',
        hostname: 'stablo-template.vercel.app',
      },
    ],
  },
}

module.exports = nextConfig
