import bffPublicClient from '@/application/data-source/bff-public-instance';
import authService from '@/application/services/auth';

export const signInGuest = async () => {
  try {
    const response = await authService(bffPublicClient).authGuest();
    const data = response?.data || { accessToken: null, refreshToken: null };
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
