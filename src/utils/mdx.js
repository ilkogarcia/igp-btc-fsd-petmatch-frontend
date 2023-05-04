import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const root = process.cwd()

export function getFiles() {
  return fs.readdirSync(path.join(root, 'src/_posts'))
}

export async function getFileBySlug(slug) {
  const mdxSource = fs.readFileSync(
    path.join(path.join(root, 'src/_posts'), `${slug}.mdx`),
    'utf8'
  )

  const { data, content } = await matter(mdxSource)
  const source = await serialize(content, {})

  return {
    source,
    frontmatter: {
      slug,
      ...data,
    },
  }
}

export function getAllFilesMetadata() {
  const files = getFiles()

  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, 'src/_posts', postSlug),
      'utf8'
    )
    const { data } = matter(mdxSource)

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ]
  }, [])
}
