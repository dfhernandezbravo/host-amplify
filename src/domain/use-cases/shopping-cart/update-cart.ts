import { UpdateShoppingCartEvent } from '@/domain/interfaces/shopping-cart/events/update-cart';
import { useAppDispatch } from '@/presentation/hooks/use-store';
import { updateShoppingCart } from '@/presentation/providers/store/modules/shopping-cart/slice';
import { useCallback } from 'react';

const useUpdateShoppingCart = () => {
  const dispatch = useAppDispatch();

  const updateCart = useCallback(
    (event: Event) => {
      event.stopImmediatePropagation();
      const customEvent = event as CustomEvent<UpdateShoppingCartEvent>;

      const {
        detail: { shoppingCart },
      } = customEvent;

      dispatch(updateShoppingCart(shoppingCart));
    },
    [dispatch],
  );

  return {
    updateCart,
  };
};

export default useUpdateShoppingCart;
