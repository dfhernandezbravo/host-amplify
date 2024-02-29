import shoppingCartService from '@/application/services/shopping-cart';
import { RemoveAllItemsShoppingCartEvent } from '@/domain/interfaces/shopping-cart/events/remove-all-items';
import { useAppDispatch, useAppSelector } from '@/presentation/hooks/use-store';
import { updateShoppingCart } from '@/presentation/providers/store/modules/shopping-cart/slice';
import { useCallback } from 'react';
import { useMutation } from 'react-query';
import useDispatchCartId from './dispatch-cart-id';

interface Props {
  cartId: string;
}

const useRemoveAllItemsShoppingCart = () => {
  const { cartId } = useAppSelector((state) => state.shoppingCart);
  const dispatch = useAppDispatch();
  const { dispatchCartEvent, dispatchErrorCart } = useDispatchCartId();

  const removeItemMutation = useMutation(
    (request: Props) =>
      shoppingCartService.removeAllItemsShoppingCart(request.cartId),
    {
      onSuccess: (response) => {
        dispatch(updateShoppingCart(response.data));
        dispatchCartEvent({ shoppingCart: response.data });
      },
      onError: (error) => {
        dispatchErrorCart(error);
      },
    },
  );

  const removeAllItemsShoppingCart = useCallback(
    (event: Event) => {
      event.stopImmediatePropagation();
      const customEvent = event as CustomEvent<RemoveAllItemsShoppingCartEvent>;

      const {
        detail: { cartId: cartIdEvent },
      } = customEvent;

      removeItemMutation.mutate({ cartId: cartIdEvent || cartId });
    },
    [cartId, removeItemMutation],
  );

  return {
    removeAllItemsShoppingCart,
  };
};

export default useRemoveAllItemsShoppingCart;
