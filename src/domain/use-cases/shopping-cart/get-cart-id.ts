import shoppingCartService from '@/application/services/shopping-cart';
import { useAppDispatch, useAppSelector } from '@/presentation/hooks/use-store';
import {
  setCartId,
  updateShoppingCart,
} from '@/presentation/providers/store/modules/shopping-cart/slice';
import { useQuery } from 'react-query';
import { getShoppingCart } from './get-cart';

const getCartId = async () => {
  try {
    const { data } = await shoppingCartService.getShoppingCartId();
    return data.orderFormId;
  } catch {
    return '';
  }
};

const useGetCartId = () => {
  const dispatch = useAppDispatch();
  const { cartId } = useAppSelector((state) => state.shoppingCart);
  const { hasAccessToken } = useAppSelector((state) => state.auth);
  console.log('cart', cartId);
  console.log('hasAccess', hasAccessToken);

  const { data: orderFormId, refetch: fetchCartId } = useQuery(
    ['get-cart-id'],
    getCartId,
    {
      enabled: !Boolean(cartId) && hasAccessToken,
      onSuccess: (response) => {
        dispatch(setCartId(response));
      },
    },
  );

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

  const refreshCartId = (event: Event) => {
    event.stopImmediatePropagation();
    fetchCartId();
  };

  return {
    fetchCartId,
    refreshCartId,
  };
};

export default useGetCartId;
