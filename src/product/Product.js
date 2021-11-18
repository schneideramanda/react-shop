import { Image } from '@chakra-ui/image';
import { Box, Grid, Heading, Link, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { itemSelector } from '../store/item';
import Loading from '../helper/Loading';
import { AddIcon, MinusIcon, StarIcon } from '@chakra-ui/icons';
import { Button, IconButton } from '@chakra-ui/button';
import { useDispatch } from 'react-redux';
import { addCart } from '../store/cart';
import { Link as ReactLink } from 'react-router-dom';

const Product = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(itemSelector);
  const [quantity, setQuantity] = useState(1);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (quantity === 1) {
      setDisabled(true);
    }
  }, [quantity]);

  function addQuantity() {
    setQuantity(quantity + 1);
    setDisabled(false);
  }

  function removeQuantity() {
    if (quantity === 1) {
      setDisabled(true);
    } else {
      setDisabled(false);
      setQuantity(quantity - 1);
    }
  }

  function handleClick() {
    dispatch(addCart({ ...data, quantity: quantity }));
  }

  if (loading) return <Loading />;

  return (
    <Grid templateColumns={{ base: '1fr', md: '500px 650px' }} gap={20}>
      <Image
        src={data.image}
        alt={data.title}
        boxSize={{ base: 'sm', md: 'md' }}
        ml={{ base: 0, md: 8 }}
      />
      <Grid
        border='1px'
        borderColor='gray.400'
        p={2}
        m={2}
        mr={15}
        templateRows='auto 1fr 1fr'
      >
        <Heading size='md'>{data.title}</Heading>
        <Box
          display='flex'
          alignItems='baseline'
          justifyContent='space-between'
          mt={5}
          mb={5}
        >
          <Box bg='gray.300' p={1} borderRadius='lg' mr={3}>
            {data.category}
          </Box>
          <Box>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < data.rating.rate ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {data.rating.count} reviews
            </Box>
          </Box>
        </Box>
        <Text m={2}>{data.description}</Text>
        <Heading size='sm' textAlign='right' mt={2} mr={5}>
          $ {data.price}
        </Heading>
        <Box display='flex' justifyContent='space-between' mt={8}>
          <Box>
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
          <Button
            bg='teal.500'
            _hover={{ bg: 'teal.400' }}
            onClick={handleClick}
          >
            <Link as={ReactLink} to='/cart'>
              Add to Cart
            </Link>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Product;
