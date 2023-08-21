/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
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
    ],
  },
}

module.exports = nextConfig
