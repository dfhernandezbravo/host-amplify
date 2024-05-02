import { SHOPPING_CART_EVENTS } from '@/application/infra/events/shopping-cart';
import shoppingCartService from '@/application/services/shopping-cart';
import { PaintingCode, Product } from '@/domain/entities/product';
import { AddItemShoppingCartEvent } from '@/domain/interfaces/shopping-cart/events/add-item';
import { AddItemsShoppingCartRequest } from '@/domain/interfaces/shopping-cart/http-request/add-items';
import { UpdateItemsShoppingCartRequest } from '@/domain/interfaces/shopping-cart/http-request/update-items';
import { useAppDispatch, useAppSelector } from '@/presentation/hooks/use-store';
import { updateShoppingCart } from '@/presentation/providers/store/modules/shopping-cart/slice';
import { useCallback } from 'react';
import { useMutation } from 'react-query';
import useDispatchCartId from './dispatch-cart-id';
import { ProductShoppingCart } from '@cencosud-ds/easy-design-system';

const useAddItemShoppingCart = () => {
  const dispatch = useAppDispatch();
  const { dispatchCartEvent, dispatchErrorCart, dispatchMiniCartEvent } =
    useDispatchCartId();

  const { cartId, shoppingCart } = useAppSelector(
    (state) => state.shoppingCart,
  );

  const addItemMutation = useMutation(
    (request: AddItemsShoppingCartRequest) =>
      shoppingCartService.addItemShoppingCart(request),
    {
      onSuccess: (response) => {
        dispatch(updateShoppingCart(response.data));
        dispatchCartEvent({ shoppingCart: response.data });
        dispatchMiniCartEvent({ shoppingCart: response.data });
      },
      onError: (error) => {
        dispatchErrorCart(error);
      },
    },
  );

  const updateItemMutation = useMutation(
    (request: UpdateItemsShoppingCartRequest) =>
      shoppingCartService.updateItemShoppingCart(request),
    {
      onSuccess(response) {
        dispatch(updateShoppingCart(response.data));
        dispatchCartEvent({ shoppingCart: response.data });
        dispatchMiniCartEvent({ shoppingCart: response.data });
      },
      onError: (error) => {
        dispatchErrorCart(error);
      },
    },
  );

  const dispatchMinicartSimulateAddProductEvent = useCallback(
    (data: Product) => {
      const eventDispatch = new CustomEvent(
        SHOPPING_CART_EVENTS.SIMULATE_ADD_PRODUCT,
        {
          detail: {
            product: data,
          },
        },
      );
      window.dispatchEvent(eventDispatch);
      document.dispatchEvent(eventDispatch);
    },
    [],
  );

  const addItemToCart = useCallback(
    (event: Event) => {
      event.preventDefault();
      const customEvent = event as CustomEvent<AddItemShoppingCartEvent>;
      console.log('customEvent', customEvent);
      const {
        detail: { cartId: cartIdEvent, product },
      } = customEvent;

      dispatchMinicartSimulateAddProductEvent(product);

      if (!shoppingCart) {
        return;
      }

      const productIndex = shoppingCart.items.findIndex(
        (item) => item.product.id === product.id,
      );

      const calculatePaintingCode = (): PaintingCode | undefined => {
        if (!product.paintingCode) return undefined;

        const itemProduct: ProductShoppingCart & {
          colorCodes?: PaintingCode[];
        } = shoppingCart?.items?.[productIndex]?.product;

        const filteredColor = itemProduct?.colorCodes?.find(
          (item: PaintingCode) => item.code === product?.paintingCode?.code,
        );

        if (filteredColor) {
          return {
            ...product.paintingCode,
            quantity: product.quantity + filteredColor.quantity,
          };
        }
        return {
          ...product.paintingCode,
          quantity: product.quantity,
        };
      };

      if (productIndex < 0) {
        addItemMutation.mutate({
          cartId: cartIdEvent || cartId,
          orderItems: [
            {
              id: product.id,
              quantity: product.quantity,
              paintingCode: product.paintingCode
                ? { ...product.paintingCode, quantity: product.quantity }
                : undefined,
            },
          ],
        });
      } else {
        const paintingCode = calculatePaintingCode();

        updateItemMutation.mutate({
          cartId: cartIdEvent || cartId,
          orderItems: [
            {
              index: productIndex,
              quantity:
                product.quantity + shoppingCart.items[productIndex].quantity,
              paintingCode: paintingCode,
            },
          ],
        });
      }
    },
    [
      dispatchMinicartSimulateAddProductEvent,
      shoppingCart,
      addItemMutation,
      cartId,
      updateItemMutation,
    ],
  );

  return {
    addItemToCart,
  };
};

export default useAddItemShoppingCart;
