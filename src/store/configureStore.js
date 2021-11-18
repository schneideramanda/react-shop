import { configureStore, combineReducers } from '@reduxjs/toolkit';
import products from './products';
import item from './item';
import cart from './cart';

const reducer = combineReducers({ products, item, cart });
const store = configureStore({ reducer });

export default store;
