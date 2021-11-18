import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Box, Link, Stack, Text } from '@chakra-ui/layout';
import { useSelector } from 'react-redux';
import { cartSelector } from '../store/cart';

const Menu = ({ isOpen, toggle }) => {
  const { cart } = useSelector(cartSelector);

  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align='center'
        justify={['center', 'flex-end', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <Link as={ReactLink} to='/' onClick={toggle}>
          Home
        </Link>
        <Link as={ReactLink} to='/cart' onClick={toggle}>
          {cart.length > 0 ? (
            <Text>Cart ({cart.length})</Text>
          ) : (
            <Text>Cart</Text>
          )}
        </Link>
      </Stack>
    </Box>
  );
};

export default Menu;
