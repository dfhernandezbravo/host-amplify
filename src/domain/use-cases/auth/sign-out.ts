import { AUTHCOOKIES } from '@/application/infra/cookies';
import { useCookies } from 'react-cookie';

export const useSignOut = () => {
  const [_cookies, _setCookie, removeCookie] = useCookies([
    AUTHCOOKIES.ACCESS_TOKEN,
    AUTHCOOKIES.REFRESH_TOKEN,
  ]);

  const signOut = (event: Event) => {
    event.stopImmediatePropagation();
    removeCookie(AUTHCOOKIES.ACCESS_TOKEN);
  };

  return {
    signOut,
  };
};
