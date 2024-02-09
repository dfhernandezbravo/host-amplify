import bffPrivateClient from '@/application/data-source/bff-private-instance';
import { AuthService } from '@/domain/interfaces/auth/http-service';
import Cookies from 'universal-cookie';
import { AUTHCOOKIES } from '@/application/infra/cookies';

const cookies = new Cookies();
const accessToken = cookies.get(AUTHCOOKIES.ACCESS_TOKEN);
const environment = process.env.NEXT_PUBLIC_ENV;
const enabledRequest = Boolean(environment !== 'PRODUCTION');

const authService = (httpInstance = bffPrivateClient): AuthService => {
  return {
    authGuest: () =>
      enabledRequest ? httpInstance.post('/auth/guests/signIn', {}) : null,
    signIn: (request) => httpInstance.post('/auth/signIn', request),
    setPassword: (request) => httpInstance.post('/auth/password', request),
    signUp: (request) => httpInstance.post('/auth/signUp', request),
    accessKeyValidation: (request) =>
      httpInstance.post('/auth/accessKey/validation', request),
  };
};

export default authService;
