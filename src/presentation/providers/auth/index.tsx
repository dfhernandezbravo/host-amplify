import { AUTHCOOKIES } from '@/application/infra/cookies';
import { signInGuest } from '@/domain/use-cases/auth/sign-in-guest';
import { AUTH_EVENTS } from '@/application/infra/events/auth';
import useGetShoppingCart from '@/domain/use-cases/shopping-cart/get-cart';
import { useAppDispatch, useAppSelector } from '@/presentation/hooks/use-store';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import { useQuery } from 'react-query';
import AuthEvents from './auth-events';
import { setHasAccessToken } from '../store/modules/auth/slice';
import { useEvents } from '@/presentation/hooks/use-events';
import { useUpdateShoppingCartCustomer } from '@/domain/use-cases/shopping-cart/update-customer';

interface Props {
  children: React.ReactNode;
}

const WrapperProvider: React.FC<Props> = ({ children }) => {
  const { cartId } = useAppSelector((state) => state.shoppingCart);
  const { refreshCart } = useGetShoppingCart();
  const dispatch = useAppDispatch();
  const { dispatchEvent } = useEvents();
  const router = useRouter();
  const { verifyAndUpdateCustomerInCart } = useUpdateShoppingCartCustomer();

  const [cookies, setCookie] = useCookies([
    AUTHCOOKIES.ACCESS_TOKEN,
    AUTHCOOKIES.REFRESH_TOKEN,
  ]);

  const handleRedirect = () => {
    // se remueven parametros authStatus, accessToken y refreshToken de la url
    const url = new URL(window.location.href);
    const searchParams = url.searchParams;
    searchParams.delete('authStatus');
    searchParams.delete('accessToken');
    searchParams.delete('refreshToken');
    url.search = searchParams.toString();
    router.push(url);
  };

  useQuery(['sign-in-guest'], signInGuest, {
    enabled: !cookies.accessToken,
    onSuccess: (response) => {
      setCookie(AUTHCOOKIES.ACCESS_TOKEN, response.accessToken, {
        domain: `${process.env.NEXT_PUBLIC_COOKIE_DOMAIN}`,
        path: '/',
        expires: response.accessTokenExpired
          ? new Date(response.accessTokenExpired * 1000)
          : undefined,
      });
      setCookie(AUTHCOOKIES.REFRESH_TOKEN, response.refreshToken, {
        domain: `${process.env.NEXT_PUBLIC_COOKIE_DOMAIN}`,
        path: '/',
        expires: response.refreshTokenExpired
          ? new Date(response.refreshTokenExpired * 1000)
          : undefined,
      });
      dispatch(setHasAccessToken(true));
      if (cartId) refreshCart();
    },
  });

  // efecto para manejar social login
  useEffect(() => {
    const { query } = router;
    const { authStatus, accessToken, refreshToken } = query;
    if (authStatus === 'success') {
      setCookie(AUTHCOOKIES.ACCESS_TOKEN, accessToken, {
        domain: `${process.env.NEXT_PUBLIC_COOKIE_DOMAIN}`,
        path: '/',
      });
      setCookie(AUTHCOOKIES.REFRESH_TOKEN, refreshToken, {
        domain: `${process.env.NEXT_PUBLIC_COOKIE_DOMAIN}`,
        path: '/',
      });
      dispatchEvent({
        name: AUTH_EVENTS.GET_SIGNUP_SUCCESS,
        detail: { success: true },
      });
      if (cartId) refreshCart();

      verifyAndUpdateCustomerInCart(accessToken as string);

      handleRedirect();
    }
  }, [router, setCookie]);

  return <AuthEvents>{children}</AuthEvents>;
};

const AuthProvider: React.FC<Props> = ({ children }) => {
  return (
    <CookiesProvider>
      <WrapperProvider>{children}</WrapperProvider>
    </CookiesProvider>
  );
};

export default AuthProvider;
