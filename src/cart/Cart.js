import { Box } from '@chakra-ui/layout';
import {
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { CloseButton } from '@chakra-ui/close-button';
import React, { useState } from 'react';
import CartList from './CartList';
import { useDispatch } from 'react-redux';
import { resetCart } from '../store/cart';

const Cart = () => {
  const [notification, setNotification] = useState(false);
  const dispatch = useDispatch();

  function handleBuy() {
    setNotification(true);
    dispatch(resetCart());
  }

  return (
    <Box>
      {notification ? (
        <Alert
          status='success'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'
        >
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Thanks for your purchase!
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            Products probably won't be delivered, but thanks for testing it!
          </AlertDescription>
          <CloseButton
            position='absolute'
            right='8px'
            top='8px'
            onClick={() => setNotification(false)}
          />
        </Alert>
      ) : (
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
            <Button colorScheme='teal' size='lg' onClick={handleBuy}>
              Buy!
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
