import { ShoppingCart } from '@cencosud-ds/easy-design-system';
import { createSlice } from '@reduxjs/toolkit';
import { initialStateShoppingCart } from './state';

const shoppingCartSlice = createSlice({
  name: 'shopping-cart-host',
  initialState: initialStateShoppingCart,
  reducers: {
    updateShoppingCart: (
      state,
      { payload }: { payload: ShoppingCart | null },
    ) => {
      state.shoppingCart = payload;
    },
    setCartId: (state, { payload }: { payload: string }) => {
      state.cartId = payload;
    },
  },
});

export const { updateShoppingCart, setCartId } = shoppingCartSlice.actions;
export default shoppingCartSlice;
