/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'www.agriwork.kr',
      'localholiday.s3.ap-northeast-2.amazonaws.com',
      'plus.unsplash.com',
    ],
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
