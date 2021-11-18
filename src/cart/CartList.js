import { Box, Heading, Text } from '@chakra-ui/layout';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { cartSelector } from '../store/cart';
import CartItem from './CartItem';

const CartList = () => {
  const { cart } = useSelector(cartSelector);

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <Box bg='gray.200' m={2} borderRadius='md' p={2}>
      <Heading size='lg' textAlign='center' mb={8}>
        Your Cart
      </Heading>
      {cart.length !== 0 ? (
        cart.map(({ id, title, price, image, quantity }) => (
          <CartItem
            key={id}
            id={id}
            title={title}
            price={price}
            image={image}
            quantity={quantity}
          />
        ))
      ) : (
        <Text textAlign='center'>Your cart is empty :(</Text>
      )}
    </Box>
  );
};

export default CartList;
