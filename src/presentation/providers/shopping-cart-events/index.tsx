import {
  AUTHCOOKIES,
  SHOPPING_CART_COOKIES,
} from '@/application/infra/cookies';
import useGetCartId from '@/domain/use-cases/shopping-cart/get-cart-id';
import React, { useCallback, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import WrapperEvents from './wrapper-events';

interface Props {
  children: React.ReactNode;
}

const ShoppingCartEvents: React.FC<Props> = ({ children }) => {
  const [cookies] = useCookies([
    AUTHCOOKIES.ACCESS_TOKEN,
    SHOPPING_CART_COOKIES.CART_ID,
  ]);
  const { fetchCartId } = useGetCartId();

  const getCartId = useCallback(() => {
    if (!cookies.cartId && cookies.accessToken) fetchCartId();
  }, [cookies, fetchCartId]);

  useEffect(() => {
    getCartId();
  }, [getCartId]);

  return <WrapperEvents>{children}</WrapperEvents>;
};

export default ShoppingCartEvents;
