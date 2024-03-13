import { AUTHCOOKIES } from '@/application/infra/cookies';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { MiddlewareFactory } from './stack-middleware';

export const withFriendUser: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _event: NextFetchEvent) => {
    const environment = process.env.NEXT_PUBLIC_ENV;
    const accessUser = process.env.NEXT_PUBLIC_ACCESS_USER;

    if (environment !== 'PRODUCTION') {
      return next(request, _event);
    }

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
    }

    const hasAccessUser = request.cookies.has(AUTHCOOKIES.ACCESS_USER);

    if (hasAccessUser) {
      const accessUserCookie = request.cookies.get(AUTHCOOKIES.ACCESS_USER);
      if (accessUserCookie?.value !== accessUser) {
        return NextResponse.redirect(new URL('https://easy.cl'));
      }
    }

    return NextResponse.redirect(new URL('https://easy.cl'));
  };
};
