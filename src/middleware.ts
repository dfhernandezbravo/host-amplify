import { NextResponse, NextRequest } from 'next/server';
import { AUTHCOOKIES } from './application/infra/cookies';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const environment = process.env.NEXT_PUBLIC_ENV;
  const accessUser = process.env.NEXT_PUBLIC_ACCESS_USER;

  if (environment === 'PRODUCTION') {
    const userQuery = request.nextUrl.searchParams.get('user');
    if (userQuery) {
      if (userQuery !== accessUser) {
        return NextResponse.redirect(new URL('https://easy.cl'));
      } else {
        const response = NextResponse.next();
        response.cookies.set({
          name: AUTHCOOKIES.ACCESS_USER,
          value: accessUser,
          maxAge: 3600000 * 14 * 24,
        });
        return response;
      }
    } else if (request.cookies.has(AUTHCOOKIES.ACCESS_USER)) {
      if (request.cookies.get(AUTHCOOKIES.ACCESS_USER)?.value !== accessUser) {
        return NextResponse.redirect(new URL('https://easy.cl'));
      }
    } else {
      return NextResponse.redirect(new URL('https://easy.cl'));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!api|_next|fonts|cart|confirmation|[\\w-]+\\.\\w+).*)'],
};
