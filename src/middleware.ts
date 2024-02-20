import { NextResponse, NextRequest } from 'next/server';

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
          name: 'accessUser',
          value: accessUser,
          path: '/',
          maxAge: 3600000 * 14 * 24,
          httpOnly: true,
        });
        return response;
      }
    } else if (request.cookies.has('accessUser')) {
      if (request.cookies.get('accessUser')?.value !== accessUser) {
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
