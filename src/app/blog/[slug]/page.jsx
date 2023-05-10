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
    <div>
      <div className='my-12 text-center'>
        <h1 className='text-2xl text-slate-600'>{post.data.title}</h1>
        <p className='mt-2 text-slate-400'>{post.data.date}</p>
      </div>

      <article className='prose'>
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  )
}

export default PostPage
