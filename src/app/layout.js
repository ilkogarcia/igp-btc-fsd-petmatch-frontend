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
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#00a300' />
        <meta name='theme-color' content='#ffffff' />
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
