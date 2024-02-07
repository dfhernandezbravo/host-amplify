import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from './slice';

const config = {
  key: 'host:auth',
  storage,
};

const authReducer = persistReducer(config, authSlice.reducer);

export default authReducer;
