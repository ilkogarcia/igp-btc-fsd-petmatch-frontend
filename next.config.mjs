import nextMDX from '@next/mdx'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
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
      'images.dog.ceo',
    ],
  },
  reactStrictMode: false,
}

export default withMDX(nextConfig)
