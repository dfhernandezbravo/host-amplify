import { getShoppingCart } from '@/domain/use-cases/shopping-cart/get-cart';
import { getCartId } from '@/domain/use-cases/shopping-cart/get-cart-id';
import { useAppDispatch, useAppSelector } from '@/presentation/hooks/use-store';
import React from 'react';
import { useQuery } from 'react-query';
import {
  setCartId,
  updateShoppingCart,
} from '../store/modules/shopping-cart/slice';
import WrapperEvents from './wrapper-events';

interface Props {
  children: React.ReactNode;
}

const ShoppingCartEvents: React.FC<Props> = ({ children }) => {
  const { cartId } = useAppSelector((state) => state.shoppingCart);
  const dispatch = useAppDispatch();

  const { data: orderFormId } = useQuery(['get-cart-id'], getCartId, {
    enabled: !cartId,
    onSuccess: (response) => {
      dispatch(setCartId(response));
    },
  });

  const { data: _data } = useQuery(
    ['get-cart', orderFormId],
    () => getShoppingCart(orderFormId),
    {
      enabled: !!orderFormId,
      onSuccess: (response) => {
        dispatch(updateShoppingCart(response));
      },
    },
  );

  return <WrapperEvents>{children}</WrapperEvents>;
};

export default ShoppingCartEvents;
