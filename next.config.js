/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'www.agriwork.kr',
      'localholiday.s3.ap-northeast-2.amazonaws.com',
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
  async rewrites() {
    return [
      {
        source: '/api/node/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_KEY_NODE}/:path*`,
      },
      {
        source: '/api/spring/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_KEY_SPRING}/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
