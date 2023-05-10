import getPostMetadata from '@/components/posts/getPostMetadata'
import PostPreview from '@/components/posts/postPreview'

const BlogPage = () => {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))

  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>{postPreviews}</div>
  )
}

export default BlogPage
