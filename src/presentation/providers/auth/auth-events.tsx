import { AUTH_EVENTS } from '@/application/infra/events/auth';
import { useAccessKeyValidation } from '@/domain/use-cases/auth/accesskey-validation';
import { useSetPassword } from '@/domain/use-cases/auth/set-password';
import { useSignIn } from '@/domain/use-cases/auth/sign-in';
import { useSignOut } from '@/domain/use-cases/auth/sign-out';
import React, { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

const AuthEvents: React.FC<Props> = ({ children }) => {
  const { signOut } = useSignOut();
  const { signIn } = useSignIn();
  const { setPassword } = useSetPassword();
  const { accessKeyValidation } = useAccessKeyValidation();

  useEffect(() => {
    document.addEventListener(AUTH_EVENTS.DISPATCH_LOGOUT, signOut);
    document.addEventListener(AUTH_EVENTS.DISPATCH_SIGNIN, signIn);
    document.addEventListener(AUTH_EVENTS.DISPATCH_SET_PASSWORD, setPassword);
    document.addEventListener(
      AUTH_EVENTS.DISPATCH_ACCESS_KEY_VALIDATION,
      accessKeyValidation,
    );

    return () => {
      document.removeEventListener(AUTH_EVENTS.DISPATCH_LOGOUT, signOut);
      document.removeEventListener(AUTH_EVENTS.DISPATCH_SIGNIN, signIn);
      document.removeEventListener(
        AUTH_EVENTS.DISPATCH_SET_PASSWORD,
        setPassword,
      );
      document.removeEventListener(
        AUTH_EVENTS.DISPATCH_ACCESS_KEY_VALIDATION,
        accessKeyValidation,
      );
    };
  }, [signOut]);

  return children;
};

export default AuthEvents;
