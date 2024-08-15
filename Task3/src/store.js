import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postSlice';
import popupReducer from './slices/popupSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    popup: popupReducer,
  },
});

export default store;
