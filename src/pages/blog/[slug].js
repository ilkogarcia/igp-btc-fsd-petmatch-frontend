import { getFileBySlug, getFiles } from '../../utils/mdx'
import { MDXRemote } from 'next-mdx-remote'
import BlogLayout from '@/components/bloglayout/BlogLayout'

export async function getStaticPaths() {
  const posts = await getFiles()
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug)

  return {
    props: { source, frontmatter },
  }
}

function Post({ source, frontmatter }) {
  return (
    <BlogLayout metadata={frontmatter}>
      <div className='h-fit bg-white'>
        <MDXRemote {...source} />
      </div>
    </BlogLayout>
  )
}

export default Post
