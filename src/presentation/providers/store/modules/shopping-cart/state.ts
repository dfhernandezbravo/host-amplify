import { ShoppingCart } from '@cencosud-ds/easy-design-system';

export type ShoppingCartState = {
  cartId: string;
  shoppingCart: ShoppingCart | null;
  isLoadingShoppingCart: boolean;
};

export const initialStateShoppingCart: ShoppingCartState = {
  cartId: '',
  shoppingCart: null,
  isLoadingShoppingCart: false,
};
