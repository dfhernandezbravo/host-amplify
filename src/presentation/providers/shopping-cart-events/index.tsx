import useGetCartId from '@/domain/use-cases/shopping-cart/get-cart-id';
import { useAppSelector } from '@/presentation/hooks/use-store';
import React, { useCallback, useEffect } from 'react';
import WrapperEvents from './wrapper-events';

interface Props {
  children: React.ReactNode;
}

const ShoppingCartEvents: React.FC<Props> = ({ children }) => {
  const { cartId } = useAppSelector((state) => state.shoppingCart);
  const { hasAccessToken } = useAppSelector((state) => state.auth);
  const { fetchCartId } = useGetCartId();

  const getAccessToken = useCallback(() => {
    if (cartId === '' && hasAccessToken) fetchCartId();
  }, [cartId, hasAccessToken, fetchCartId]);

  useEffect(() => {
    getAccessToken();
  }, [getAccessToken]);

  return <WrapperEvents>{children}</WrapperEvents>;
};

export default ShoppingCartEvents;
