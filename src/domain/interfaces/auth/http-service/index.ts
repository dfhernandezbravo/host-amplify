import { AxiosResponse } from 'axios';
import { AuthTokens } from '../http-request/tokens';
import { SignInRequest } from '../http-request/sign-in';
import { SignInPasswordRequest } from '../http-request/sign-in-password';
import { SignUpRequest } from '../http-request/sign-up';

export interface AuthService {
  authGuest(): Promise<AxiosResponse<AuthTokens>>;
  signIn(request: SignInRequest): Promise<AxiosResponse<AuthTokens>>;
  signInPassword(
    request: SignInPasswordRequest,
  ): Promise<AxiosResponse<AuthTokens>>;
  signUp(request: SignUpRequest): Promise<AxiosResponse<AuthTokens>>;
}
