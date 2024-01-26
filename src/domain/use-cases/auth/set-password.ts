import { AUTHCOOKIES } from '@/application/infra/cookies';
import { AUTH_EVENTS } from '@/application/infra/events/auth';
import authService from '@/application/services/auth';
import { SetPasswordRequest } from '@/domain/interfaces/auth/http-request/set-password';
import { useEvents } from '@/presentation/hooks/use-events';
import { useCookies } from 'react-cookie';
import { useMutation } from 'react-query';

export const useSetPassword = () => {
  const [_cookies, setCookie] = useCookies([
    AUTHCOOKIES.ACCESS_TOKEN,
    AUTHCOOKIES.REFRESH_TOKEN,
  ]);
  const { dispatchEvent } = useEvents();

  const setPasswordMutation = useMutation(
    (request: SetPasswordRequest) => authService().setPassword(request),
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

  const setPassword = (event: Event) => {
    event.stopImmediatePropagation();
    const customEvent = event as CustomEvent<SetPasswordRequest>;
    const { detail: request } = customEvent;
    setPasswordMutation.mutate(request);
  };

  return {
    setPassword,
  };
};