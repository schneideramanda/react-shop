import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Home from './home/Home';
import Cart from './cart/Cart';
import { Box } from '@chakra-ui/layout';
import { useDispatch } from 'react-redux';
import { getProducts } from './store/products';
import Product from './product/Product';
import Login from './login/Login';
import User from './user/User';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Box>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='/login' element={<Login />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
