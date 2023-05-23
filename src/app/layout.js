import '../styles/globals.css'
import { font } from './fonts'

import { Toaster } from 'react-hot-toast'

import Header from '@/components/header'
import Footer from '@/components/footer/footer'
import NextAuthProvider from '@/components/provider'

export const metadata = {
  title: 'PetMatch. Bringing forever homes and loving pets together',
  description:
    'A pet adoption platform to unites forever homes and loving pets together.',
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
}

export default async function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body
        className={`${font.variable} flex min-h-screen flex-col bg-green-400 antialiased`}
      >
        <NextAuthProvider>
          <Header />
          <div className='z-0'>{children}</div>
          <Footer />
          <Toaster />
        </NextAuthProvider>
      </body>
    </html>
  )
}
