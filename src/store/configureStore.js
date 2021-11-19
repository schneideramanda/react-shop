import { configureStore, combineReducers } from '@reduxjs/toolkit';
import products from './products';
import item from './item';
import cart from './cart';
import user from './user';

const reducer = combineReducers({ products, item, cart, user });
const store = configureStore({ reducer });

export default store;
