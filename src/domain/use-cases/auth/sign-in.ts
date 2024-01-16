import { AUTHCOOKIES } from '@/application/infra/cookies';
import { AUTH_EVENTS } from '@/application/infra/events/auth';
import authService from '@/application/services/auth';
import { SignInRequest } from '@/domain/interfaces/auth/http-request/sign-in';
import { useEvents } from '@/presentation/hooks/use-events';
import { useCookies } from 'react-cookie';
import { useMutation } from 'react-query';

export const useSignIn = () => {
  const [_cookies, setCookie] = useCookies([
    AUTHCOOKIES.ACCESS_TOKEN,
    AUTHCOOKIES.REFRESH_TOKEN,
  ]);
  const { dispatchEvent } = useEvents();

  const sigInMutation = useMutation(
    (request: SignInRequest) => authService().signIn(request),
    {
      onSuccess: ({ data: response }) => {
        setCookie(AUTHCOOKIES.ACCESS_TOKEN, response.accessToken);
        setCookie(AUTHCOOKIES.REFRESH_TOKEN, response.refreshToken);
        dispatchEvent({
          name: AUTH_EVENTS.GET_SIGNUP_SUCCESS,
          detail: { success: true },
        });
      },
      onError: (response) => {
        dispatchEvent({
          name: AUTH_EVENTS.GET_SIGNUP_SUCCESS,
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
