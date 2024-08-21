import envConfig from '@/config';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const authPaths = ['/auth/login', '/auth/register'];
const privatePaths = ['/admin', '/admin/products/all', '/admin/products/create', '/admin/categories/create']

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const loginAdminMode = envConfig.NEXT_PUBLIC_LOGIN_ADMIN_MODE === 'true' ? true : false;
  if (loginAdminMode) {
    const { pathname } = request.nextUrl;
    const accessToken = request.cookies.get('accessToken')?.value;

    if (privatePaths.some(path => pathname.startsWith(path)) && !accessToken) {
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }
    if (authPaths.some(path => pathname.startsWith(path)) && accessToken) {

      return NextResponse.redirect(new URL('/admin', request.url))
    }
  }


}

export const config = {
  matcher: [
    '/auth/:path*',
    '/admin/:path*'
  ]
}