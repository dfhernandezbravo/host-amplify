import axios from 'axios';
import Cookies from 'universal-cookie';
import { AUTHCOOKIES } from '../infra/cookies';

const bffPrivateClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BFF_WEB_URL}`,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY_BFF_WEB,
  },
});

bffPrivateClient.interceptors.request.use(function (config) {
  const cookies = new Cookies();
  const accessToken = cookies.get(AUTHCOOKIES.ACCESS_TOKEN);
  const accessUser = cookies.get(AUTHCOOKIES.ACCESS_USER);
  const controller = new AbortController();
  const environment = process.env.NEXT_PUBLIC_ENV;

  if (environment === 'PRODUCTION' && !accessUser) {
    controller.abort();
  }

  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

  return { ...config, signal: controller.signal };
});

export default bffPrivateClient;
