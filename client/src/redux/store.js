import { configureStore } from '@reduxjs/toolkit';
import { tattoosReducer } from './slices/tattoos';

const store = configureStore({
  reducer: {
    tattoos: tattoosReducer,
  },
});

export default store;
