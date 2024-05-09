import { AUTHCOOKIES } from '@/application/infra/cookies';
import { AUTH_EVENTS } from '@/application/infra/events/auth';
import authService from '@/application/services/auth';
import { SignInRequest } from '@/domain/interfaces/auth/http-request/sign-in';
import { useEvents } from '@/presentation/hooks/use-events';
import { useCookies } from 'react-cookie';
import { useMutation } from 'react-query';
import useGetShoppingCart from '../shopping-cart/get-cart';
import { useUpdateShoppingCartCustomer } from '../shopping-cart/update-customer';

export const useSignIn = () => {
  const [_cookies, setCookie] = useCookies([
    AUTHCOOKIES.ACCESS_TOKEN,
    AUTHCOOKIES.REFRESH_TOKEN,
  ]);
  const { dispatchEvent } = useEvents();
  const { refreshCart } = useGetShoppingCart();
  const { verifyAndUpdateCustomerInCart } = useUpdateShoppingCartCustomer();

  const sigInMutation = useMutation(
    (request: SignInRequest) => authService().signIn(request),
    {
      onSuccess: ({ data: response }) => {
        setCookie(AUTHCOOKIES.ACCESS_TOKEN, response.accessToken, {
          domain: `${process.env.NEXT_PUBLIC_COOKIE_DOMAIN}`,
          path: '/',
          expires: response.accessTokenExpired
            ? new Date(response.accessTokenExpired * 1000)
            : undefined,
        });
        setCookie(AUTHCOOKIES.REFRESH_TOKEN, response.refreshToken, {
          domain: `${process.env.NEXT_PUBLIC_COOKIE_DOMAIN}`,
          path: '/',
          expires: response.refreshTokenExpired
            ? new Date(response.refreshTokenExpired * 1000)
            : undefined,
        });
        refreshCart();
        dispatchEvent({
          name: AUTH_EVENTS.GET_SIGNUP_SUCCESS,
          detail: { success: true },
        });

        if (response.accessToken) {
          verifyAndUpdateCustomerInCart(response.accessToken);
        }
      },
      onError: (response) => {
        dispatchEvent({
          name: AUTH_EVENTS.GET_SIGNUP_ERROR,
          detail: { success: false, error: response },
        });
      },
    },
  );

  const signIn = (event: Event) => {
    event.stopImmediatePropagation();
    const customEvent = event as CustomEvent<SignInRequest>;
    const { detail: request } = customEvent;
    sigInMutation.mutate(request);
  };

  return {
    signIn,
  };
};
