import getPostMetadata from '@/components/posts/getPostMetadata'
import PostPreview from '@/components/posts/postPreview'
import { TbDog } from 'react-icons/tb'

const BlogPage = () => {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))

  return (
    <div className='h-fit bg-white pb-40'>
      {/* blog main section  */}
      <div className='mx-auto flex w-4/5 flex-col gap-20 pt-40 lg:grid lg:grid-cols-12'>
        <div className='flex flex-col space-y-6 lg:col-span-8'>
          <span className='text-green-600'>Blog Posts</span>
          <h2 className='text-6xl font-extrabold text-gray-600'>
            Tips, news and stories about your{' '}
            <span className='text-green-600'>Furry Friends!</span>
          </h2>
          <p className='text-xl text-gray-400'>
            Read the latest articles on pet care, training, adoption, and more.
            Our blog offers insights and advice for pet owners and animal
            lovers.
          </p>
        </div>
        <div className='flex flex-col justify-items-center lg:col-span-4 lg:inline-block'>
          <TbDog
            className='hidden rotate-12 text-green-600 hover:animate-spin lg:inline-block'
            size={200}
          />
        </div>
      </div>

      {/* blog posts */}
      <div className='mx-auto flex w-4/5 flex-col gap-10 pt-20 lg:grid lg:grid-cols-12'>
        {postPreviews}
      </div>
    </div>
  )
}

export default BlogPage
