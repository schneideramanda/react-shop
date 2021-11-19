import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const savedToken = window.localStorage.getItem('userToken');
const parsedToken = JSON.parse(savedToken);

const savedUser = window.localStorage.getItem('username');
const parsedUser = JSON.parse(savedUser);

export const postUser = createAsyncThunk(
  'user/postUser',
  async (user, password) => {
    return await axios
      .post('https://fakestoreapi.com/auth/login', {
        username: user,
        password: password,
      })
      .then((res) => {
        const { data } = res;
        console.log(data);
        return data;
      });
  }
);

const initialState = {
  token: parsedToken || '',
  status: '',
  error: {
    msg: '',
    status: '',
  },
  user: parsedUser || '',
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    cleanState: (state) => {
      state.error.msg = '';
      state.error.status = '';
      state.user = '';
    },
    userLogout: (state) => {
      state.user = '';
      state.token = '';
    },
  },
  extraReducers: {
    [postUser.pending]: (state) => {
      state.status = 'loading';
    },
    [postUser.fulfilled]: (state, action) => {
      state.status = 'success';
      state.token = action.payload.token;
      state.error.msg = action.payload.msg;
      state.error.status = action.payload.status;
    },
    [postUser.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const { getUser, cleanState, userLogout } = user.actions;
export const userSelector = (state) => state.user;
export const errorSelector = (state) => state.user.error;
export default user.reducer;
