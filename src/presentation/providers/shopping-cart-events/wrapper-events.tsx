import { SHOPPING_CART_EVENTS } from '@/application/infra/events/shopping-cart';
import useAddItemShoppingCart from '@/domain/use-cases/shopping-cart/add-item';
import useDispatchCartId from '@/domain/use-cases/shopping-cart/dispatch-cart-id';
import useGetCartId from '@/domain/use-cases/shopping-cart/get-cart-id';
import useRemoveAllItemsShoppingCart from '@/domain/use-cases/shopping-cart/remove-all-items';
import useRemoveItemShoppingCart from '@/domain/use-cases/shopping-cart/remove-item';
import useUpdateShoppingCart from '@/domain/use-cases/shopping-cart/update-cart';
import useUpdateItemShoppingCart from '@/domain/use-cases/shopping-cart/update-item';
import { useAppSelector } from '@/presentation/hooks/use-store';
import React, { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

const WrapperEvents = ({ children }: Props) => {
  const { cartId, shoppingCart } = useAppSelector(
    (state) => state.shoppingCart,
  );
  const { addItemToCart } = useAddItemShoppingCart();
  const { updateItemToCart } = useUpdateItemShoppingCart();
  const { removeItemShoppingCart } = useRemoveItemShoppingCart();
  const { removeAllItemsShoppingCart } = useRemoveAllItemsShoppingCart();
  const { updateCart, updateShoppingCartWithoutItems } =
    useUpdateShoppingCart();
  const { dispatchGetCartId, dispatchCartEvent } = useDispatchCartId();
  const { refreshCartId } = useGetCartId();

  useEffect(() => {
    if (cartId && shoppingCart) {
      document.addEventListener(
        SHOPPING_CART_EVENTS.ADD_ITEM_SHOPPING_CART,
        addItemToCart,
      );
      document.addEventListener(
        SHOPPING_CART_EVENTS.UPDATE_ITEM_SHOPPING_CART,
        updateItemToCart,
      );
      document.addEventListener(
        SHOPPING_CART_EVENTS.REMOVE_ITEM_SHOPPING_CART,
        removeItemShoppingCart,
      );
      document.addEventListener(
        SHOPPING_CART_EVENTS.REMOVE_ALL_ITEMS_SHOPPING_CART,
        removeAllItemsShoppingCart,
      );
      document.addEventListener(
        SHOPPING_CART_EVENTS.UPDATE_SHOPPING_CART,
        updateCart,
      );
      document.addEventListener(
        SHOPPING_CART_EVENTS.DISPATCH_GET_CART_ID,
        dispatchGetCartId,
      );
      document.addEventListener(
        SHOPPING_CART_EVENTS.DISPATCH_GET_CART,
        dispatchCartEvent,
      );
      document.addEventListener(
        SHOPPING_CART_EVENTS.REFRESH_CART_ID,
        refreshCartId,
      );
      document.addEventListener(
        SHOPPING_CART_EVENTS.DISPATCH_SHOPPING_CART_WITHOUT_ITEMS,
        updateShoppingCartWithoutItems,
      );
    }

    return () => {
      document.removeEventListener(
        SHOPPING_CART_EVENTS.ADD_ITEM_SHOPPING_CART,
        addItemToCart,
      );
      document.removeEventListener(
        SHOPPING_CART_EVENTS.UPDATE_ITEM_SHOPPING_CART,
        updateItemToCart,
      );
      document.removeEventListener(
        SHOPPING_CART_EVENTS.REMOVE_ITEM_SHOPPING_CART,
        removeItemShoppingCart,
      );
      document.removeEventListener(
        SHOPPING_CART_EVENTS.REMOVE_ALL_ITEMS_SHOPPING_CART,
        removeAllItemsShoppingCart,
      );
      document.removeEventListener(
        SHOPPING_CART_EVENTS.UPDATE_SHOPPING_CART,
        updateCart,
      );
      document.removeEventListener(
        SHOPPING_CART_EVENTS.DISPATCH_GET_CART_ID,
        dispatchGetCartId,
      );
      document.removeEventListener(
        SHOPPING_CART_EVENTS.DISPATCH_GET_CART,
        dispatchCartEvent,
      );
      document.removeEventListener(
        SHOPPING_CART_EVENTS.REFRESH_CART_ID,
        refreshCartId,
      );
      document.removeEventListener(
        SHOPPING_CART_EVENTS.DISPATCH_SHOPPING_CART_WITHOUT_ITEMS,
        updateShoppingCartWithoutItems,
      );
    };
  }, [
    cartId,
    shoppingCart,
    addItemToCart,
    updateItemToCart,
    removeItemShoppingCart,
    removeAllItemsShoppingCart,
    updateCart,
    dispatchGetCartId,
    dispatchCartEvent,
    refreshCartId,
    updateShoppingCartWithoutItems,
  ]);

  useEffect(() => {
    dispatchCartEvent();
  }, [dispatchCartEvent, shoppingCart]);

  useEffect(() => {
    dispatchGetCartId();
  }, [dispatchGetCartId, cartId]);

  return children;
};

export default WrapperEvents;
