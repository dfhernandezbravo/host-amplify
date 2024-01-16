import { AUTH_EVENTS } from '@/application/infra/events/auth';
import { useSignIn } from '@/domain/use-cases/auth/sign-in';
import { useSignOut } from '@/domain/use-cases/auth/sign-out';
import React, { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

const AuthEvents: React.FC<Props> = ({ children }) => {
  const { signOut } = useSignOut();
  const { signIn } = useSignIn();

  useEffect(() => {
    document.addEventListener(AUTH_EVENTS.DISPATCH_LOGOUT, signOut);
    document.addEventListener(AUTH_EVENTS.DISPATCH_SIGNIN, signIn);

    return () => {
      document.removeEventListener(AUTH_EVENTS.DISPATCH_LOGOUT, signOut);
      document.addEventListener(AUTH_EVENTS.DISPATCH_SIGNIN, signIn);
    };
  }, [signOut]);

  return children;
};

export default AuthEvents;
