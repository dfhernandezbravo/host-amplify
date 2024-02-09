import { ShoppingCart } from '@cencosud-ds/easy-design-system';

export type ShoppingCartState = {
  cartId: string | null;
  shoppingCart: ShoppingCart | null;
  isLoadingShoppingCart: boolean;
};

export const initialStateShoppingCart: ShoppingCartState = {
  cartId: null,
  shoppingCart: null,
  isLoadingShoppingCart: false,
};
