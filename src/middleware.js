import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req) {
  const session = await getToken({ req })

  if (!session) {
    const requestedPage = req.nextUrl.pathname
    const url = req.nextUrl.clone()
    url.pathname = '/login'
    url.search = `p=${requestedPage}`

    return NextResponse.redirect(url)
  }

  //   return NextResponse.redirect(new URL('/about', req.url))
  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*', // Matched paths will render this middleware e.g. /admin
}
