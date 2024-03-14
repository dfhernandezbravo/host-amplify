import { AUTHCOOKIES } from '@/application/infra/cookies';
import { useAppDispatch } from '@/presentation/hooks/use-store';
import { setHasAccessToken } from '@/presentation/providers/store/modules/auth/slice';
import { useCookies } from 'react-cookie';

export const useSignOut = () => {
  const [_cookies, _setCookie, removeCookie] = useCookies([
    AUTHCOOKIES.ACCESS_TOKEN,
    AUTHCOOKIES.REFRESH_TOKEN,
  ]);

  const dispatch = useAppDispatch();

  const signOut = (event?: Event) => {
    if (event) event.stopImmediatePropagation();
    removeCookie(AUTHCOOKIES.ACCESS_TOKEN);
    dispatch(setHasAccessToken(false));
  };

  return {
    signOut,
  };
};
