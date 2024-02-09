import useGetCartId from '@/domain/use-cases/shopping-cart/get-cart-id';
import { useAppSelector } from '@/presentation/hooks/use-store';
import React, { useEffect } from 'react';
import WrapperEvents from './wrapper-events';

interface Props {
  children: React.ReactNode;
}

const ShoppingCartEvents: React.FC<Props> = ({ children }) => {
  useGetCartId();

  return <WrapperEvents>{children}</WrapperEvents>;
};

export default ShoppingCartEvents;
