import envConfig from '@/config';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const authPaths = ['/auth/login', '/auth/register', '/auth/verify'];
const privatePaths = ['/admin', '/admin/products/all', '/admin/products/create', '/admin/categories/create']

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get('accessToken')?.value;
  const info = request.cookies.get('info')?.value;


  if (pathname === '/shop') {
    console.log({ accessToken, info });
  }

  if (privatePaths.some(path => pathname.startsWith(path)) && !accessToken) {
    return NextResponse.redirect(new URL('auth/login', request.url))
  }
  if (authPaths.some(path => pathname.startsWith(path)) && accessToken) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (pathname.startsWith('/shop') && !accessToken) {
    return NextResponse.redirect(new URL('/auth/register', request.url))
  }
  if (pathname.startsWith('/welcome') && !accessToken) {
    return NextResponse.redirect(new URL('/auth/register', request.url))
  }

  if (info) {
    const infoParse = JSON.parse(info ? info : '');

    if (pathname.startsWith('/welcome') && accessToken && infoParse.shop_id) {
      return NextResponse.redirect(new URL('/shop', request.url))
    }

    if (pathname.startsWith('/shop') && accessToken) {
      const test = { ...infoParse, shop_id: null };
      if (!infoParse.shop_id) {
        return NextResponse.redirect(new URL('/welcome', request.url))
      }
    }
  }



}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    '/shop/:path*'
  ],
}