import shoppingCartService from '@/application/services/shopping-cart';

export const getShoppingCart = async (cartId?: string) => {
  try {
    const { data } = await shoppingCartService.getShoppingCart(cartId!);
    return data;
  } catch (error) {
    return null;
  }
};
