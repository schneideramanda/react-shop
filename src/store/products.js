import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { createSelector } from 'reselect';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    return await axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        const { data } = res;
        return data;
      })
      .catch((err) => {
        console.error(err);
      });
  }
);

const initialState = {
  products: [],
  status: '',
  filterTerm: '',
};

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filterTerm = action.payload;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.status = 'loading';
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = 'success';
      state.products = action.payload;
    },
    [getProducts.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const productsSelector = (state) => state.products;

// Selects the list of all the products
const selectAllProducts = (state) => state.products.products;

// Selects the current filter
const selectFilterTerm = (state) => state.products.filterTerm;

// Creates the filter to sort the array based on desc / asc price
export const selectProductsPrice = createSelector(
  selectAllProducts,
  selectFilterTerm,
  (products, filterTerm) => {
    const filteredProducts = [...products];
    if (filterTerm === 'high') {
      return filteredProducts.sort((a, b) => b.price - a.price);
    } else if (filterTerm === 'low') {
      return filteredProducts.sort((a, b) => a.price - b.price);
    } else {
      return filteredProducts;
    }
  }
);

export const { changeFilter } = products.actions;
export default products.reducer;
