import bffPrivateClient from '@/application/data-source/bff-private-instance';
import { AuthService } from '@/domain/interfaces/auth/http-service';

const authService = (httpInstance = bffPrivateClient): AuthService => {
  return {
    authGuest: () => httpInstance.post('/auth/guests/signIn', {}),
    signIn: (request) => httpInstance.post('/auth/signIn', request),
    signInPassword: (request) => httpInstance.post('/auth/password', request),
    signUp: (request) => httpInstance.post('/auth/signUp', request),
  };
};

export default authService;
