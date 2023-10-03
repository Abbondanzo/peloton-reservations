import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { STUDIOS } from '../constants/studios';

interface StudioState {
  studioId: string;
}

const initialState: StudioState = {
  studioId: Object.entries(STUDIOS).find(
    ([_, value]) => value.location === 'New York'
  )![0],
};

const studioSlice = createSlice({
  name: 'studio',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setStudioId(state, action: PayloadAction<string>) {
      state.studioId = action.payload;
    },
  },
});

export default studioSlice.reducer;
