import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shoppingCartSlice from './slice';

const config = {
  key: 'host:shopping-cart',
  storage,
};

const shoppingCartReducer = persistReducer(config, shoppingCartSlice.reducer);

export default shoppingCartReducer;
