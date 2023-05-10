import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const getPostMetadata = () => {
  const root = process.cwd()
  const folder = path.join(root, 'src/_posts')
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith('.mdx'))

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}/${fileName}`, 'utf8')
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      excerpt: matterResult.data.excerpt,
      coverImage: matterResult.data.coverImage,
      date: matterResult.data.date,
      authorName: matterResult.data.author.name,
      authorPicture: matterResult.data.author.picture,
      slug: fileName.replace('.mdx', ''),
    }
  })

  return posts
}

export default getPostMetadata
