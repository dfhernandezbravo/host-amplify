import bffPublicClient from '@/application/data-source/bff-public-instance';
import authService from '@/application/services/auth';

export const signInGuest = async () => {
  try {
    const { data } = await authService(bffPublicClient).authGuest();
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
