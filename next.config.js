/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['loremflickr.com', 'source.unsplash.com']
  },
  experimental: {
    appDir: true
  },
  reactStrictMode: true
}

module.exports = nextConfig
