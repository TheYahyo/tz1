import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/ProductSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer
  }
});
