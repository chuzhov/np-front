import { configureStore } from '@reduxjs/toolkit';
import packageManagerReducer from './slices/packageManagerSlice';

const initialState = {
  packageManager: {
    packages: { items: [], isLoading: false, error: null },
    filter: '',
  },
};

export const store = configureStore({
  reducer: {
    packageManager: packageManagerReducer,
  },
  preloadedState: initialState,
});
