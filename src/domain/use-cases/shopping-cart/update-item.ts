import shoppingCartService from '@/application/services/shopping-cart';
import { UpdateItemShoppingCartEvent } from '@/domain/interfaces/shopping-cart/events/update-item';
import { UpdateItemsShoppingCartRequest } from '@/domain/interfaces/shopping-cart/http-request/update-items';
import { useAppDispatch, useAppSelector } from '@/presentation/hooks/use-store';
import { updateShoppingCart } from '@/presentation/providers/store/modules/shopping-cart/slice';
import { useCallback } from 'react';
import { useMutation } from 'react-query';
import useDispatchCartId from './dispatch-cart-id';

const useUpdateItemShoppingCart = () => {
  const dispatch = useAppDispatch();
  const { cartId } = useAppSelector((state) => state.shoppingCart);
  const { dispatchCartEvent } = useDispatchCartId();

  const updateItemMutation = useMutation(
    (request: UpdateItemsShoppingCartRequest) =>
      shoppingCartService.updateItemShoppingCart(request),
    {
      onSuccess(response) {
        dispatch(updateShoppingCart(response.data));
        dispatchCartEvent({ shoppingCart: response.data });
      },
    },
  );

  const updateItemToCart = useCallback(
    (event: Event) => {
      event.stopImmediatePropagation();
      const customEvent = event as CustomEvent<UpdateItemShoppingCartEvent>;

      const {
        detail: { cartId: cartIdEvent, orderItems },
      } = customEvent;

      updateItemMutation.mutate({
        cartId: cartIdEvent || cartId,
        orderItems,
      });
    },
    [cartId, updateItemMutation],
  );

  return {
    updateItemToCart,
  };
};

export default useUpdateItemShoppingCart;
