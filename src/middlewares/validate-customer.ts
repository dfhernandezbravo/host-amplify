import { AUTHCOOKIES } from '@/application/infra/cookies';
import { getCustomer } from '@/domain/use-cases/customer/get-customer';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { MiddlewareFactory } from './stack-middleware';

const prefixes = ['/account'];

export const withCustomer: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _event: NextFetchEvent) => {
    const { pathname } = request.nextUrl;

    if (!prefixes.some((prefix) => pathname.startsWith(prefix))) {
      return next(request, _event);
    }

    const hasAccessToken = request.cookies.has(AUTHCOOKIES.ACCESS_TOKEN);

    if (!hasAccessToken) {
      const url = new URL(`/`, request.url);
      return NextResponse.redirect(url);
    }

    const customer = await getCustomer(
      request.cookies.get(AUTHCOOKIES.ACCESS_TOKEN)?.value || '',
    );

    if (customer) return next(request, _event);

    const url = new URL(`/`, request.url);
    return NextResponse.redirect(url);
  };
};
