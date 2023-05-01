/**
 * @file Root layout component
 * @description This file contains the root layout component
 */

import '../styles/globals.css'
import Header from '../components/header/Header'
import { font } from './fonts'
import Footer from '@/components/footer/Footer'
import { NextAuthProvider } from './providers'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export const metadata = {
  title: 'PetMatch. Bringing forever homes and loving pets together',
  description:
    'A pet adoption platform to unites forever homes and loving pets together. We allows users to search for available pets for adoption and connect with local shelters or rescue organizations. We encourages and facilitates pet adoption, connects potential adopters with animals in need, and provides them with the support and resources necessary to ensure successful adoption.',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  console.log(session)

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
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
