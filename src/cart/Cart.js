import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import React from 'react';
import CartList from './CartList';

const Cart = () => {
  return (
    <Box>
      <CartList />
      <Box
        justifyContent='center'
        alignItems='center'
        textAlign='right'
        mt={6}
        mb={5}
        mr={8}
      >
        <Button colorScheme='teal' size='lg'>
          Buy!
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
