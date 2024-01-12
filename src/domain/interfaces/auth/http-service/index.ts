import { AxiosResponse } from 'axios';
import { AuthTokens } from '../http-request/tokens';

export interface AuthService {
  authGuest(): Promise<AxiosResponse<AuthTokens>>;
}
