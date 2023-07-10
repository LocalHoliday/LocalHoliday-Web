/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.agriwork.kr'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: 'tong.visitkorea.or.kr',
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
