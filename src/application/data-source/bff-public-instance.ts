import axios from 'axios';

const bffPublicClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BFF_WEB_URL}`,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY_BFF_WEB,
  },
});

bffPublicClient.interceptors.request.use(function (config) {
  const controller = new AbortController();

  // if (process.env.NEXT_PUBLIC_ENV === 'PRODUCTION') controller.abort();

  return { ...config, signal: controller.signal };
});

export default bffPublicClient;
