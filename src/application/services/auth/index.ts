import bffPrivateClient from '@/application/data-source/bff-private-instance';
import { AuthService } from '@/domain/interfaces/auth/http-service';

const authService = (httpInstance = bffPrivateClient): AuthService => {
  return {
    authGuest: () => httpInstance.post('/auth/guests/signIn', {}),
  };
};

export default authService;
