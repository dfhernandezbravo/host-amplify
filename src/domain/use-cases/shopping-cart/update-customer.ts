import { useAppDispatch, useAppSelector } from '@/presentation/hooks/use-store';
import useDispatchCartId from './dispatch-cart-id';
import { useMutation } from 'react-query';
import { Customer } from '@/domain/entities/customer';
import shoppingCartService from '@/application/services/shopping-cart';
import { updateShoppingCart } from '@/presentation/providers/store/modules/shopping-cart/slice';
import { useCallback } from 'react';

export const useUpdateShoppingCartCustomer = () => {
  const dispatch = useAppDispatch();
  const { dispatchErrorCart } = useDispatchCartId();

  const { cartId } = useAppSelector((state) => state.shoppingCart);

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

  const updateShoppingCartCustomerEmail = useCallback(
    (email: string) => {
      const customer: Customer = {
        email,
      };
      mutation.mutateAsync(customer);
    },
    [mutation],
  );

  return {
    updateShoppingCartCustomer,
    updateShoppingCartCustomerEmail,
  };
};
