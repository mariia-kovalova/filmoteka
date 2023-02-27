import { combineReducers } from '@reduxjs/toolkit';
import films from './filmsSlice';
import film from './filmSlice';

export const reducer = combineReducers({
  films,
  film,
});
