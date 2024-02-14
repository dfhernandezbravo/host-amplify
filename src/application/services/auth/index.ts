import bffPrivateClient from '@/application/data-source/bff-private-instance';
import { AuthService } from '@/domain/interfaces/auth/http-service';

const authService = (httpInstance = bffPrivateClient): AuthService => {
  return {
    authGuest: () => httpInstance.post('/auth/guests/signIn', {}),
    signIn: (request) => httpInstance.post('/auth/signIn', request),
    setPassword: (request) => httpInstance.post('/auth/password', request),
    signUp: (request) => httpInstance.post('/auth/signUp', request),
    accessKeyValidation: (request) =>
      httpInstance.post('/auth/accessKey/validation', request),
  };
};

export default authService;
