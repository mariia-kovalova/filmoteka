import { createSlice } from '@reduxjs/toolkit';
import { getFilmById } from './operations';

const initialState = {
  data: {},
  isLoading: false,
  error: null,
};

const filmSlice = createSlice({
  name: 'film',
  initialState,
  extraReducers: {
    [getFilmById.pending](state) {
      state.isLoading = true;
    },
    [getFilmById.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    },
    [getFilmById.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default filmSlice.reducer;
