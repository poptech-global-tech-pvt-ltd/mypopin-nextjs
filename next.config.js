/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.mypop.in',
          },
        ],
      },
}

module.exports = nextConfig
