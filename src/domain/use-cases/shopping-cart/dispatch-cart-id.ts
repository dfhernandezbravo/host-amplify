import { SHOPPING_CART_EVENTS } from '@/application/infra/events/shopping-cart';
import { GetCartIdEvent } from '@/domain/interfaces/shopping-cart/events/get-cart-id';
import { GetShoppingCartEvent } from '@/domain/interfaces/shopping-cart/events/get-shopping-cart';
import { useAppSelector } from '@/presentation/hooks/use-store';

const useDispatchCartId = () => {
  const { cartId, shoppingCart } = useAppSelector(
    (state) => state.shoppingCart,
  );

  const dispatchGetCartId = (event?: Event) => {
    if (event) event.stopImmediatePropagation();

    const eventDispatch = new CustomEvent<GetCartIdEvent>(
      SHOPPING_CART_EVENTS.GET_CART_ID,
      {
        detail: { cartId },
      },
    );

    window.dispatchEvent(eventDispatch);
    document.dispatchEvent(eventDispatch);
  };

  const dispatchCartEvent = (event?: Event) => {
    if (event) event.stopImmediatePropagation();

    if (!shoppingCart) return;

    const eventDispatch = new CustomEvent<GetShoppingCartEvent>(
      SHOPPING_CART_EVENTS.GET_SHOPPING_CART,
      {
        detail: { shoppingCart },
      },
    );

    window.dispatchEvent(eventDispatch);
    document.dispatchEvent(eventDispatch);
  };

  return {
    dispatchGetCartId,
    dispatchCartEvent,
  };
};

export default useDispatchCartId;
