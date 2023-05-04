import { font } from '../app/fonts'
import Head from 'next/head'

export const metadata = {
  title:
    'PetMatch Blog - Discover Tips, News and Stories About Your Furry Friends.',
  description:
    'Read the latest articles on pet care, training, adoption, and more. Our blog offers insights and advice for pet owners and animal lovers.',
}

function BlogLayout({ children, metadata = {} }) {
  return (
    <html lang='en'>
      <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <body
        className={`${font.variable} flex min-h-screen flex-col bg-green-400 antialiased`}
      >
          {children}
      </body>
    </html>
  )
}

export default BlogLayout
