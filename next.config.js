/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'loremflickr.com',
      'source.unsplash.com',
      'images.unsplash.com',
      'unsplash.com',
      'cdn.pixabay.com',
      'picsum.photos',
      'fastly.picsum.photos',
      'xsgames.co',
    ],
  },
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
}

module.exports = nextConfig
