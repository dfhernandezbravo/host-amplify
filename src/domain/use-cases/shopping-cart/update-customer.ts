import { useAppDispatch, useAppSelector } from '@/presentation/hooks/use-store';
import useDispatchCartId from './dispatch-cart-id';
import { useMutation } from 'react-query';
import { Customer } from '@/domain/entities/customer';
import shoppingCartService from '@/application/services/shopping-cart';
import { updateShoppingCart } from '@/presentation/providers/store/modules/shopping-cart/slice';
import { useCallback } from 'react';
import { TokenDecoded } from '@/domain/entities/auth/token';

export const useUpdateShoppingCartCustomer = () => {
  const dispatch = useAppDispatch();
  const { dispatchErrorCart } = useDispatchCartId();

  const { cartId, shoppingCart } = useAppSelector(
    (state) => state.shoppingCart,
  );

  const mutation = useMutation(
    (request: Customer) => shoppingCartService.updateCustomer(cartId, request),
    {
      onSuccess: (response) => {
        dispatch(updateShoppingCart(response.data));
      },
      onError: (error) => {
        dispatchErrorCart(error);
      },
    },
  );

  const updateShoppingCartCustomer = useCallback(
    (event: Event) => {
      event.stopImmediatePropagation();
      const {
        detail: { customer },
      } = event as CustomEvent<{ customer: Customer }>;
      mutation.mutateAsync(customer);
    },
    [mutation],
  );

  const decodeToken = (token: string): TokenDecoded | null => {
    const parts = token.split('.');
    const encodedPayload = parts[1];
    const decodedPayload = window.atob(encodedPayload);
    const decodedData = JSON.parse(decodedPayload);
    return decodedData;
  };

  const verifyAndUpdateCustomerInCart = useCallback(
    (accessToken: string) => {
      const jwtData = decodeToken(accessToken as string);
      if (
        jwtData?.username &&
        shoppingCart?.customer?.email !== jwtData.username
      ) {
        const customer: Customer = {
          email: jwtData.username,
        };
        mutation.mutateAsync(customer);
      }
    },
    [mutation],
  );

  return {
    updateShoppingCartCustomer,
    verifyAndUpdateCustomerInCart,
    decodeToken,
  };
};
