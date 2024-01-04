import { SHOPPING_CART_EVENTS } from '@/application/infra/events/shopping-cart';
import { GetCartIdEvent } from '@/domain/interfaces/shopping-cart/events/get-cart-id';
import { useEvents } from '@/presentation/hooks/use-events';
import { useAppSelector } from '@/presentation/hooks/use-store';

const useDispatchCartId = () => {
  const { cartId } = useAppSelector((state) => state.shoppingCart);
  const { dispatchEvent } = useEvents();

  const dispatchGetCartId = (event: Event) => {
    event.stopImmediatePropagation();

    dispatchEvent<GetCartIdEvent>({
      name: SHOPPING_CART_EVENTS.GET_CART_ID,
      detail: { cartId },
    });
  };

  return {
    dispatchGetCartId,
  };
};

export default useDispatchCartId;
