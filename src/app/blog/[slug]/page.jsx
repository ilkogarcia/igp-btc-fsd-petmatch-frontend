import fs from 'fs'
import path from 'path'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import getPostMetadata from '@/components/posts/getPostMetadata'
import { format } from 'date-fns'
import Avatar from '@/components/avatar'

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
          <div className='flex items-center'>
            <Avatar
              alt={post.data.author.name}
              src={post.data.author.picture}
              size={45}
              className='rounded-full border-2 border-green-300'
            />
            <p className='ml-2 text-base text-gray-400'>
              {post.data.author.name}
              <span className='block align-baseline text-sm italic text-gray-300'>
                {format(new Date(post.data.date), 'MM/dd/yyyy')}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* blog posts */}
      <div className='mx-auto flex w-4/5 flex-col mt-4'>
        <article 
          className='
          prose
          max-w-none
          dark:prose-invert
          text-gray-500
          prose-xl
          prose-h2:text-gray-500
          prose-h2:font-extrabold
          prose-h2:text-2xl
          md:prose-h2:text-3xl
          prose-a:text-green-600
          prose-blockquote:text-green-600
          prose-blockquote:italic
          prose-blockquote:font-light
          prose-blockquote:text-2xl
          prose-img:rounded-md
          prose-img:shadow-md'
        >
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </div>
  )
}

export default PostPage
