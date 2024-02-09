import useGetCartId from '@/domain/use-cases/shopping-cart/get-cart-id';
import { useAppSelector } from '@/presentation/hooks/use-store';
import React from 'react';
import WrapperEvents from './wrapper-events';

interface Props {
  children: React.ReactNode;
}

const ShoppingCartEvents: React.FC<Props> = ({ children }) => {
  const { cartId } = useAppSelector((state) => state.shoppingCart);
  const { fetchCartId } = useGetCartId();

  if (!cartId) fetchCartId();

  return <WrapperEvents>{children}</WrapperEvents>;
};

export default ShoppingCartEvents;
