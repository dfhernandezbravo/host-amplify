import { createSlice } from '@reduxjs/toolkit';
import { AccountLinks, initialAccountState } from './state';

const accountSlice = createSlice({
  name: 'legals',
  initialState: initialAccountState,
  reducers: {
    setAccountLinks: (state, { payload }: { payload: AccountLinks[] }) => {
      state.links = payload;
    },
  },
});

export const { setAccountLinks } = accountSlice.actions;
export default accountSlice;
