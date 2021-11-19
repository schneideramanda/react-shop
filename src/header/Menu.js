import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Box, Flex, Link, Stack, Text } from '@chakra-ui/layout';
import { useSelector } from 'react-redux';
import { cartSelector } from '../store/cart';
import { userSelector } from '../store/user';

const Menu = ({ isOpen, toggle }) => {
  const { cart } = useSelector(cartSelector);
  const { token, user } = useSelector(userSelector);

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
            <Flex>
              <Text>Cart </Text>
              <Text ml={2} fontWeight='500' color='teal.500'>
                ({cart.length})
              </Text>
            </Flex>
          ) : (
            <Text>Cart</Text>
          )}
        </Link>
        {token ? (
          <Link
            color='teal.500'
            fontWeight='bold'
            as={ReactLink}
            to='/user'
            onClick={toggle}
          >
            {user}
          </Link>
        ) : (
          <Link as={ReactLink} to='/login' onClick={toggle}>
            Login
          </Link>
        )}
      </Stack>
    </Box>
  );
};

export default Menu;
