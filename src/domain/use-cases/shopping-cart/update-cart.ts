import { UpdateShoppingCartEvent } from '@/domain/interfaces/shopping-cart/events/update-cart';
import { useAppDispatch, useAppSelector } from '@/presentation/hooks/use-store';
import { updateShoppingCart } from '@/presentation/providers/store/modules/shopping-cart/slice';
import { ShoppingCart } from '@cencosud-ds/easy-design-system';
import { useCallback } from 'react';
import useDispatchCartId from './dispatch-cart-id';

const useUpdateShoppingCart = () => {
  const dispatch = useAppDispatch();
  const { shoppingCart } = useAppSelector((state) => state.shoppingCart);
  const { dispatchCartEvent } = useDispatchCartId();

  const updateCart = useCallback(
    (event: Event) => {
      event.stopImmediatePropagation();
      const customEvent = event as CustomEvent<UpdateShoppingCartEvent>;

      const {
        detail: { shoppingCart },
      } = customEvent;

      dispatch(updateShoppingCart(shoppingCart));
      dispatchCartEvent({ shoppingCart });
    },
    [dispatch, dispatchCartEvent],
  );

  const updateShoppingCartWithoutItems = useCallback(
    (event: Event) => {
      event.stopImmediatePropagation();

      if (!shoppingCart) return;

      const newShoppingCart: ShoppingCart = { ...shoppingCart, items: [] };

      dispatch(updateShoppingCart(newShoppingCart));
      dispatchCartEvent({ shoppingCart: newShoppingCart });
    },
    [shoppingCart, dispatch, dispatchCartEvent],
  );

  return {
    updateCart,
    updateShoppingCartWithoutItems,
  };
};

export default useUpdateShoppingCart;
