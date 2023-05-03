'use client'
import BlogLayout from '@/components/bloglayout/BlogLayout'
import '../styles/globals.css'
import { getAllFilesMetadata } from '../utils/mdx'
import Image from 'next/image'
import Link from 'next/link'

export async function getStaticProps() {
  const posts = await getAllFilesMetadata()
  return {
    props: {
      posts,
    },
  }
}

function BlogPage({ posts }) {
  return (
    <BlogLayout>
      <div className='h-fit bg-white'>
        {/* main section  */}
        <div className='mx-auto mt-40 grid w-3/5 gap-20 lg:grid-cols-2'>
          <div className='left flex flex-col space-y-6'>
            <span className='text-green-600'>Blog Posts</span>
            <h1 className='text-6xl font-extrabold text-gray-600'>
              Tips, news and stories about your{' '}
              <span className='text-green-600'>Furry Friends!</span>
            </h1>
          </div>
          <div className='right flex flex-col items-center justify-items-center space-y-6 pt-10'>
            <p className='text-xl text-gray-400'>
              Read the latest articles on pet care, training, adoption, and
              more. Our blog offers insights and advice for pet owners and
              animal lovers.
            </p>
            <p className='text-xl text-gray-400'>
              From pet health and nutrition to behavior and training, our blog
              covers everything you need to know about your furry companions.
              Get expert advice and stay informed with PetMatch.
            </p>
          </div>
        </div>

        {/* blog posts */}
        <div className='mx-auto mb-60 mt-20 grid w-3/5 gap-12 lg:grid-cols-2'>
          {posts.map((post) => (
            <div key={post.slug} className='rounded-md bg-gray-100 shadow-lg'>
              <div className='relative overflow-hidden rounded-t-md'>
                <Image
                  alt='This pet is looking for a home'
                  src={post.image}
                  quality={85}
                  width={640}
                  height={480}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </div>
              <div className='p-6'>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className='text-3xl font-extrabold text-gray-600'>
                    {post.title}
                  </h3>
                </Link>
                <p className='mt-6 text-gray-500'>{post.description}</p>
                <div className='mt-12 flex justify-end'>
                  <p className='text-sm text-gray-300'>
                    {post.author}{' '}
                    <span className='italic'>( {post.date} )</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BlogLayout>
  )
}

export default BlogPage
