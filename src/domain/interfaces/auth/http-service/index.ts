import { AxiosResponse } from 'axios';
import { SetPasswordRequest } from '../http-request/set-password';
import { SignInRequest } from '../http-request/sign-in';
import { SignUpRequest } from '../http-request/sign-up';
import { AuthTokens } from '../http-request/tokens';
import { AccessKeyValidationRequest } from '../http-request/acesskey-validation';

export interface AuthService {
  authGuest(): Promise<AxiosResponse<AuthTokens>>;
  signIn(request: SignInRequest): Promise<AxiosResponse<AuthTokens>>;
  setPassword(request: SetPasswordRequest): Promise<AxiosResponse<AuthTokens>>;
  signUp(request: SignUpRequest): Promise<AxiosResponse<AuthTokens>>;
  accessKeyValidation(
    request: AccessKeyValidationRequest,
  ): Promise<AxiosResponse<AuthTokens>>;
}
