import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './modules/shopping-cart/reducer';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
