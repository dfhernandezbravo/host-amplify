import shoppingCartService from '@/application/services/shopping-cart';
import { useAppDispatch } from '@/presentation/hooks/use-store';
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

  const { data: orderFormId, refetch: fetchCartId } = useQuery(
    ['get-cart-id'],
    getCartId,
    {
      enabled: false,
      onSuccess: (response) => {
        dispatch(setCartId(response));
      },
    },
  );

  useQuery(['get-cart', orderFormId], () => getShoppingCart(orderFormId), {
    enabled: !!orderFormId,
    onSuccess: (response) => {
      dispatch(updateShoppingCart(response));
    },
  });

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
