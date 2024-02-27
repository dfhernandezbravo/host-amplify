import { createSlice } from '@reduxjs/toolkit';
import { LegalLiks, initialStateLegals } from './state';

const legalsSlice = createSlice({
  name: 'legals',
  initialState: initialStateLegals,
  reducers: {
    setLegalsLinks: (state, { payload }: { payload: LegalLiks[] }) => {
      state.links = payload;
    },
  },
});

export const { setLegalsLinks } = legalsSlice.actions;
export default legalsSlice;
