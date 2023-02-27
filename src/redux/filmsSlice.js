import { createSlice } from '@reduxjs/toolkit';
import { getFilms } from './operations';

const initialState = {
  data: {},
  isLoading: false,
  error: null,
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  extraReducers: {
    [getFilms.pending](state) {
      state.isLoading = true;
    },
    [getFilms.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    },
    [getFilms.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default filmsSlice.reducer;
