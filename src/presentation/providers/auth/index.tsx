import { AUTHCOOKIES } from '@/application/infra/cookies';
import { signInGuest } from '@/domain/use-cases/auth/sign-in-guest';
import { getShoppingCart } from '@/domain/use-cases/shopping-cart/get-cart';
import { useAppDispatch, useAppSelector } from '@/presentation/hooks/use-store';
import React, { useCallback, useEffect } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import { useQuery } from 'react-query';
import { updateShoppingCart } from '../store/modules/shopping-cart/slice';
import AuthEvents from './auth-events';

interface Props {
  children: React.ReactNode;
}

const WrapperProvider: React.FC<Props> = ({ children }) => {
  const { cartId } = useAppSelector((state) => state.shoppingCart);
  const dispatch = useAppDispatch();

  const [cookies, setCookie] = useCookies([
    AUTHCOOKIES.ACCESS_TOKEN,
    AUTHCOOKIES.REFRESH_TOKEN,
  ]);

  useQuery(['sign-in-guest'], signInGuest, {
    enabled: !cookies.accessToken,
    onSuccess: (response) => {
      setCookie(AUTHCOOKIES.ACCESS_TOKEN, response.accessToken);
      setCookie(AUTHCOOKIES.REFRESH_TOKEN, response.refreshToken);
    },
  });

  const refreshCart = useCallback(async () => {
    const shoppingCart = await getShoppingCart(cartId);
    if (shoppingCart) dispatch(updateShoppingCart(shoppingCart));
  }, [cartId, dispatch]);

  useEffect(() => {
    if (cookies.accessToken) refreshCart();
  }, [cookies.accessToken, refreshCart]);

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
