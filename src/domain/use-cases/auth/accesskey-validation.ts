import { AUTHCOOKIES } from '@/application/infra/cookies';
import { AUTH_EVENTS } from '@/application/infra/events/auth';
import authService from '@/application/services/auth';
import { AccessKeyValidationRequest } from '@/domain/interfaces/auth/http-request/acesskey-validation';
import { useEvents } from '@/presentation/hooks/use-events';
import { useCookies } from 'react-cookie';
import { useMutation } from 'react-query';
import useGetShoppingCart from '../shopping-cart/get-cart';
import { useUpdateShoppingCartCustomer } from '../shopping-cart/update-customer';
import useAnalyticsAuth from './use-analytics-auth';

export const useAccessKeyValidation = () => {
  const { sendLoginEvent } = useAnalyticsAuth();
  const [_cookies, setCookie] = useCookies([
    AUTHCOOKIES.ACCESS_TOKEN,
    AUTHCOOKIES.REFRESH_TOKEN,
  ]);
  const { dispatchEvent } = useEvents();
  const { refreshCart } = useGetShoppingCart();
  const { verifyAndUpdateCustomerInCart } = useUpdateShoppingCartCustomer();

  const accessKeyValidationMutation = useMutation(
    (request: AccessKeyValidationRequest) =>
      authService().accessKeyValidation(request),
    {
      onSuccess: async ({ data: response }) => {
        setCookie(AUTHCOOKIES.ACCESS_TOKEN, response.accessToken, {
          domain: `${process.env.NEXT_PUBLIC_COOKIE_DOMAIN}`,
          path: '/',
        });
        setCookie(AUTHCOOKIES.REFRESH_TOKEN, response.refreshToken, {
          domain: `${process.env.NEXT_PUBLIC_COOKIE_DOMAIN}`,
          path: '/',
        });
        const cartRefreshed = await refreshCart();
        dispatchEvent({
          name: AUTH_EVENTS.GET_SIGNUP_SUCCESS,
          detail: { success: true },
        });
        const cartWithUpdatedCustomer = await verifyAndUpdateCustomerInCart(
          response.accessToken,
        );

        sendLoginEvent(cartWithUpdatedCustomer || cartRefreshed);
      },
      onError: (response) => {
        dispatchEvent({
          name: AUTH_EVENTS.GET_SIGNUP_ERROR,
          detail: { success: false, error: response },
        });
      },
    },
  );

  const accessKeyValidation = (event: Event) => {
    event.stopImmediatePropagation();
    const customEvent = event as CustomEvent<AccessKeyValidationRequest>;
    const { detail: request } = customEvent;
    accessKeyValidationMutation.mutate(request);
  };

  return {
    accessKeyValidation,
  };
};
