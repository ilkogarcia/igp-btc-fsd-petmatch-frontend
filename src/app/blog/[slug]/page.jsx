import fs from 'fs'
import path from 'path'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import getPostMetadata from '@/components/posts/getPostMetadata'

const getPostContent = (slug) => {
  const root = process.cwd()
  const folder = path.join(root, 'src/_posts')
  const file = `${folder}/${slug}.mdx`
  const content = fs.readFileSync(file, 'utf8')
  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

const PostPage = (props) => {
  const slug = props.params.slug
  const post = getPostContent(slug)

  return (
    <div className='h-fit bg-white pb-40'>
      {/* article top header  */}
      <div className='mx-auto flex w-4/5 flex-col pt-40'>
        <div className='flex flex-col space-y-6 lg:col-span-8'>
          <span className='text-green-600'>Blog Posts</span>
          <h2 className='text-6xl font-extrabold text-gray-600'>
            {post.data.title}
          </h2>
          <p className='text-lg text-gray-400'>
            by {post.data.author.name}, {post.data.date}
          </p>
        </div>
      </div>

      {/* blog posts */}
      <article className='tex-gray-400 mx-auto flex w-4/5 flex-col pt-20 text-lg'>
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  )
}

export default PostPage
