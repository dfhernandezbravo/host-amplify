import axios from 'axios';
import { useCookies } from 'react-cookie';

const bffPrivateClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BFF_WEB_URL}`,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY_BFF_WEB,
  },
});

bffPrivateClient.interceptors.request.use(function (config) {
  const [cookie] = useCookies(['accessToken', 'refreshToken']);
  const accessToken = cookie.accessToken;

  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

export default bffPrivateClient;
