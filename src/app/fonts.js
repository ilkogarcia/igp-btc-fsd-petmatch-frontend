import { Space_Grotesk as spaceGrotesk } from 'next/font/google'

export const font = spaceGrotesk({
  subsets: ['latin'],
  weights: [400, 700],
  styles: ['Regular', 'Bold'],
  preload: true,
  variable: '--font-grotesk'
})
