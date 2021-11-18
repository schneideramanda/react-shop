import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getItem = createAsyncThunk('item/getItem', async (id) => {
  return await axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
});

const initialState = {
  loading: false,
  data: [],
};

const item = createSlice({
  name: 'item',
  initialState,
  extraReducers: {
    [getItem.pending]: (state) => {
      state.loading = true;
    },
    [getItem.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getItem.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default item.reducer;
export const itemSelector = (state) => state.item;
