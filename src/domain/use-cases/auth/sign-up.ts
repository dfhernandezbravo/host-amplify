import { AUTHCOOKIES } from '@/application/infra/cookies';
import { AUTH_EVENTS } from '@/application/infra/events/auth';
import authService from '@/application/services/auth';
import { useEvents } from '@/presentation/hooks/use-events';
import { useCookies } from 'react-cookie';
import { useMutation } from 'react-query';
import useGetShoppingCart from '../shopping-cart/get-cart';
import { SignUpRequest } from '@/domain/interfaces/auth/http-request/sign-up';
import useAnalyticsAuth from './use-analytics-auth';
import { useUpdateShoppingCartCustomer } from '../shopping-cart/update-customer';

export const useSignUp = () => {
  const [_cookies, setCookie] = useCookies([
    AUTHCOOKIES.ACCESS_TOKEN,
    AUTHCOOKIES.REFRESH_TOKEN,
  ]);
  const { sendLoginEvent } = useAnalyticsAuth();
  const { dispatchEvent } = useEvents();
  const { refreshCart } = useGetShoppingCart();
  const { verifyAndUpdateCustomerInCart } = useUpdateShoppingCartCustomer();

  const signUpMutation = useMutation(
    (request: SignUpRequest) => authService().signUp(request),
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
        const cartWithUpdatedCustomer = await verifyAndUpdateCustomerInCart(
          response.accessToken,
        );
        sendLoginEvent(cartWithUpdatedCustomer || cartRefreshed);

        dispatchEvent({
          name: AUTH_EVENTS.GET_SIGNUP_SUCCESS,
          detail: { success: true },
        });
      },
      onError: (response) => {
        dispatchEvent({
          name: AUTH_EVENTS.GET_CREATE_ACCOUNT_ERROR,
          detail: { success: false, error: response },
        });
      },
    },
  );

  const signUp = (event: Event) => {
    event.stopImmediatePropagation();
    const customEvent = event as CustomEvent<SignUpRequest>;
    const { detail: request } = customEvent;
    signUpMutation.mutate(request);
  };

  return {
    signUp,
  };
};
