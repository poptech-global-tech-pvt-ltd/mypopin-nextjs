/** @type {import('next').NextConfig} */
const nextConfig = {
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
