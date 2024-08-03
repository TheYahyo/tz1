import { createSlice } from '@reduxjs/toolkit';

const ProductTodosSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, isImportant: false, isEditing: false });
    },
    deleteProduct: (state, action) => {
      return state.filter(product => product.id !== action.payload);
    },
    toggleImportant: (state, action) => {
      const product = state.find(product => product.id === action.payload);
      if (product) {
        product.isImportant = !product.isImportant;
      }
    },
    toggleEditing: (state, action) => {
      const product = state.find(product => product.id === action.payload);
      if (product) {
        product.isEditing = !product.isEditing;
      }
    },
    updateProduct: (state, action) => {
      const { id, text } = action.payload;
      const product = state.find(product => product.id === id);
      if (product) {
        product.text = text;
        product.isEditing = false;
      }
    }
  }
});

export const { addProduct, deleteProduct, toggleImportant, toggleEditing, updateProduct } = ProductTodosSlice.actions;

export default ProductTodosSlice.reducer;
