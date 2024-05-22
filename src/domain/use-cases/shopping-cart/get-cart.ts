import shoppingCartService from '@/application/services/shopping-cart';
import { useAppDispatch, useAppSelector } from '@/presentation/hooks/use-store';
import { updateShoppingCart } from '@/presentation/providers/store/modules/shopping-cart/slice';
import { useMutation } from 'react-query';
import useDispatchCartId from './dispatch-cart-id';

export const getShoppingCart = async (cartId?: string) => {
  try {
    const { data } = await shoppingCartService.getShoppingCart(cartId!);
    return data;
  } catch (error) {
    throw new Error('Shopping Cart without response');
  }
};

const useGetShoppingCart = () => {
  const dispatch = useAppDispatch();
  const { cartId } = useAppSelector((state) => state.shoppingCart);
  const { dispatchCartEvent, dispatchErrorCart } = useDispatchCartId();

  const getCartMutation = useMutation(
    (cartId: string) => getShoppingCart(cartId),
    {
      onSuccess: (response) => {
        dispatch(updateShoppingCart(response));
        dispatchCartEvent({ shoppingCart: response });
      },
      onError: (error) => {
        dispatchErrorCart(error);
      },
    },
  );

  const refreshCart = async (cartIdRecived?: string) => {
    return await getCartMutation.mutateAsync(cartIdRecived || cartId);
  };

  return {
    refreshCart,
  };
};

export default useGetShoppingCart;
