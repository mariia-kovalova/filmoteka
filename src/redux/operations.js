import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'f68110fe6010762197ab45abbadc1a08';

export const getFilms = createAsyncThunk(
  'films/homepage',
  async ({ query, page }, thunkAPI) => {
    try {
      if (query.trim() === '') {
        const { data } = await axios.get('/trending/movie/day', {
          params: {
            api_key: API_KEY,
            page,
          },
        });
        return data;
      }

      const { data } = await axios.get('/search/movie', {
        params: {
          api_key: API_KEY,
          query,
          page,
          include_adult: false,
        },
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getFilmById = createAsyncThunk(
  'films/by-id',
  async (movie_id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/movie/${movie_id}`, {
        params: {
          api_key: API_KEY,
        },
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getFilmTrailer = createAsyncThunk(
  'films/trailer',
  async (movie_id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/movie/${movie_id}/videos`, {
        params: {
          api_key: API_KEY,
        },
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
