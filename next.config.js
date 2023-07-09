/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
