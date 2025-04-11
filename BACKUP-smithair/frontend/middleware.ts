import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = ['/admin', '/admin/products', '/admin/orders', '/admin/stats'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 🔐 AuthGuard : protège /admin*
  const token = request.cookies.get('token');
  const isProtected = protectedRoutes.some((route) => pathname.startsWith(`/${request.nextUrl.locale}${route}`));
  if (isProtected && !token) {
    return NextResponse.redirect(new URL(`/${request.nextUrl.locale}/login`, request.url));
  }

  // 🍪 CookieLang : mémorise la langue
  const response = NextResponse.next();
  response.cookies.set('preferredLang', request.nextUrl.locale);
  return response;
}

export const config = {
  matcher: ['/((fr|en|sw))/((?!_next).*)'],
};
