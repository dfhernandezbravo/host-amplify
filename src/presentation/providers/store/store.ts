import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './modules/shopping-cart/reducer';
import { persistStore } from 'redux-persist';
import authReducer from './modules/auth/reducer';
import legalsSlice from './modules/legals/slice';
import accountSlice from './modules/account/slice';

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    auth: authReducer,
    legals: legalsSlice.reducer,
    account: accountSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
