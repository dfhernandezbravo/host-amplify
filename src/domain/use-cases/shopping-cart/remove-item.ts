import shoppingCartService from '@/application/services/shopping-cart';
import { RemoveItemShoppingCartEvent } from '@/domain/interfaces/shopping-cart/events/remove-item';
import { useAppDispatch, useAppSelector } from '@/presentation/hooks/use-store';
import { updateShoppingCart } from '@/presentation/providers/store/modules/shopping-cart/slice';
import { useCallback } from 'react';
import { useMutation } from 'react-query';
import useDispatchCartId from './dispatch-cart-id';

interface Props {
  cartId: string;
  itemIndex: number;
}

const useRemoveItemShoppingCart = () => {
  const { cartId } = useAppSelector((state) => state.shoppingCart);
  const dispatch = useAppDispatch();
  const { dispatchCartEvent, dispatchErrorCart } = useDispatchCartId();

  const removeItemMutation = useMutation(
    (request: Props) =>
      shoppingCartService.removeItemShoppingCart(
        request.cartId,
        request.itemIndex,
      ),
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

  const removeItemShoppingCart = useCallback(
    (event: Event) => {
      event.stopImmediatePropagation();
      const customEvent = event as CustomEvent<RemoveItemShoppingCartEvent>;

      const {
        detail: { cartId: cartIdEvent, itemIndex },
      } = customEvent;

      removeItemMutation.mutate({ cartId: cartIdEvent || cartId, itemIndex });
    },
    [cartId, removeItemMutation],
  );

  return {
    removeItemShoppingCart,
  };
};
export default useRemoveItemShoppingCart;
