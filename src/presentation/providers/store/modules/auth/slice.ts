import { createSlice } from '@reduxjs/toolkit';
import { initialStateAuth } from './state';

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  reducers: {
    setLoggedIn: (state, { payload }) => {
      state.loggedIn = payload;
    },
  },
});

export default authSlice;
