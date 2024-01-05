import { SHOPPING_CART_EVENTS } from '@/application/infra/events/shopping-cart';
import { GetCartIdEvent } from '@/domain/interfaces/shopping-cart/events/get-cart-id';
import { GetShoppingCartEvent } from '@/domain/interfaces/shopping-cart/events/get-shopping-cart';
import { useEvents } from '@/presentation/hooks/use-events';
import { useAppSelector } from '@/presentation/hooks/use-store';

const useDispatchCartId = () => {
  const { cartId, shoppingCart } = useAppSelector(
    (state) => state.shoppingCart,
  );
  const { dispatchEvent } = useEvents();

  const dispatchGetCartId = (event?: Event) => {
    if (event) event.stopImmediatePropagation();

    dispatchEvent<GetCartIdEvent>({
      name: SHOPPING_CART_EVENTS.GET_CART_ID,
      detail: { cartId },
    });
  };

  const dispatchCartEvent = (event?: Event) => {
    if (event) event.stopImmediatePropagation();

    if (!shoppingCart) return;

    dispatchEvent<GetShoppingCartEvent>({
      name: SHOPPING_CART_EVENTS.GET_SHOPPING_CART,
      detail: { shoppingCart },
    });
  };

  return {
    dispatchGetCartId,
    dispatchCartEvent,
  };
};

export default useDispatchCartId;
