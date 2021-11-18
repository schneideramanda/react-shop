import { Box, Grid, Heading, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import React, { useEffect, useState } from 'react';
import { AddIcon, MinusIcon, DeleteIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/button';
import { useDispatch } from 'react-redux';
import { addItem, removeCart, removeItem } from '../store/cart';

const CartItem = ({ id, title, price, image, quantity }) => {
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (quantity === 1) {
      setDisabled(true);
    }
  }, [quantity]);

  function addQuantity() {
    dispatch(addItem(id));
    setDisabled(false);
  }

  function removeQuantity() {
    if (quantity === 1) {
      setDisabled(true);
    } else {
      setDisabled(false);
      dispatch(removeItem(id));
    }
  }

  function handleClick() {
    dispatch(removeCart(id));
  }

  return (
    <Box bg='gray.300' m={3} p={2} borderRadius='md'>
      <Grid
        templateColumns={{ base: '1fr', md: 'auto 1fr 1fr 1fr auto' }}
        gap={3}
        alignItems='center'
      >
        <Image
          src={image}
          alt={title}
          m={{ base: '0 auto', md: '0' }}
          w={[150, 10]}
          h={[150, 10]}
        />
        <Heading ml={1} size='sm' textAlign='center'>
          {title}
        </Heading>
        <Box ml={20}>
          <IconButton
            variant='outline'
            colorScheme='teal'
            icon={<MinusIcon />}
            onClick={removeQuantity}
            isDisabled={disabled}
          ></IconButton>
          <Box as='span' m={2}>
            {quantity}
          </Box>
          <IconButton
            variant='outline'
            colorScheme='teal'
            icon={<AddIcon />}
            onClick={addQuantity}
          ></IconButton>
        </Box>
        <Text ml={{ base: 20, md: 8 }}>
          Total: $ {(price * quantity).toFixed(2)}
        </Text>
        <IconButton
          onClick={handleClick}
          colorScheme='teal'
          icon={<DeleteIcon />}
        ></IconButton>
      </Grid>
    </Box>
  );
};

export default CartItem;
