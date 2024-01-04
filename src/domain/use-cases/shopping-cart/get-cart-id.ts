import shoppingCartService from '@/application/services/shopping-cart';

export const getCartId = async () => {
  try {
    const { data } = await shoppingCartService.getShoppingCartId();
    return data.orderFormId;
  } catch {
    return '';
  }
};
