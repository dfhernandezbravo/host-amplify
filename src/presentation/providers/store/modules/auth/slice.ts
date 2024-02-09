import { createSlice } from '@reduxjs/toolkit';
import { initialStateAuth } from './state';

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  reducers: {
    setLoggedIn: (state, { payload }) => {
      state.loggedIn = payload;
    },
    setHasAccessToken: (state, { payload }: { payload: boolean }) => {
      state.hasAccessToken = payload;
    },
  },
});

export const { setHasAccessToken } = authSlice.actions;

export default authSlice;
