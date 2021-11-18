import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { createSelector } from 'reselect';

// GET Request with the list containing all the products
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
  filterTerm: {
    sort: '',
    category: '',
  },
};

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    changeSort: (state, action) => {
      state.filterTerm.sort = action.payload;
    },
    changeCategory: (state, action) => {
      state.filterTerm.category = action.payload;
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
    let filteredProducts = [...products];
    if (filterTerm.category !== '') {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filterTerm.category.toLowerCase()
      );
    }
    if (filterTerm.sort === 'high') {
      return filteredProducts.sort((a, b) => b.price - a.price);
    } else if (filterTerm.sort === 'low') {
      return filteredProducts.sort((a, b) => a.price - b.price);
    } else {
      return filteredProducts;
    }
  }
);

// Returns all the category types available for filtering
export const selectAllCategories = createSelector(
  selectAllProducts,
  (products) => {
    return [...new Set(products.map((product) => product.category))];
  }
);

export const { changeSort, changeCategory } = products.actions;
export default products.reducer;
