import shoppingCartService from '@/application/services/shopping-cart';
import { useAppDispatch } from '@/presentation/hooks/use-store';
import {
  setCartId,
  updateShoppingCart,
} from '@/presentation/providers/store/modules/shopping-cart/slice';
import { useQuery } from 'react-query';
import { getShoppingCart } from './get-cart';
import { useCookies } from 'react-cookie';
import { SHOPPING_CART_COOKIES } from '@/application/infra/cookies';

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
  const [cookies, setCookies] = useCookies([SHOPPING_CART_COOKIES.CART_ID]);
  const cartId = cookies.cartId;

  const { refetch: fetchCartId } = useQuery(['get-cart-id'], getCartId, {
    enabled: false,
    onSuccess: (response) => {
      dispatch(setCartId(response));
      setCookies(SHOPPING_CART_COOKIES.CART_ID, response);
    },
  });

  useQuery(['get-cart', cartId], () => getShoppingCart(cartId), {
    enabled: !!cartId,
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
