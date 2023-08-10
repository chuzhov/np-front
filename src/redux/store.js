import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './slices/phonebookSlice';

const initialState = {
  phonebook: {
    packages: { items: [], isLoading: false, error: null },
    filter: '',
  },
};

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  preloadedState: initialState,
});
