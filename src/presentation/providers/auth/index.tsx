import { AUTHCOOKIES } from '@/application/infra/cookies';
import { signInGuest } from '@/domain/use-cases/auth/sign-in-guest';
import useGetShoppingCart from '@/domain/use-cases/shopping-cart/get-cart';
import { useAppDispatch, useAppSelector } from '@/presentation/hooks/use-store';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import { useQuery } from 'react-query';
import AuthEvents from './auth-events';
import { setHasAccessToken } from '../store/modules/auth/slice';

interface Props {
  children: React.ReactNode;
}

const WrapperProvider: React.FC<Props> = ({ children }) => {
  const { cartId } = useAppSelector((state) => state.shoppingCart);
  const { refreshCart } = useGetShoppingCart();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [cookies, setCookie] = useCookies([
    AUTHCOOKIES.ACCESS_TOKEN,
    AUTHCOOKIES.REFRESH_TOKEN,
  ]);

  useQuery(['sign-in-guest'], signInGuest, {
    enabled: !cookies.accessToken,
    onSuccess: (response) => {
      setCookie(AUTHCOOKIES.ACCESS_TOKEN, response.accessToken);
      setCookie(AUTHCOOKIES.REFRESH_TOKEN, response.refreshToken);
      dispatch(setHasAccessToken(true));
      if (cartId) refreshCart();
    },
  });

  // efecto para manejar social login
  useEffect(() => {
    const { query } = router;
    const { authStatus, accessToken, refreshToken } = query;
    if (authStatus === 'success') {
      setCookie(AUTHCOOKIES.ACCESS_TOKEN, accessToken as string);
      setCookie(AUTHCOOKIES.REFRESH_TOKEN, refreshToken as string);
      router.push(router.pathname);
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
