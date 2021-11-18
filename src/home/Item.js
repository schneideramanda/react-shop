import React from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Grid, Heading, Text } from '@chakra-ui/layout';
import { StarIcon } from '@chakra-ui/icons';
import { getItem } from '../store/item';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Item = ({ itemID, title, price, image, rating }) => {
  const dispatch = useDispatch();

  function handleClick() {
    console.log(itemID);
    dispatch(getItem(itemID));
  }

  return (
    <Link to={`/product/${itemID}`}>
      <Box
        borderRadius={5}
        p={4}
        m={4}
        cursor='pointer'
        border='2px'
        borderColor='gray.300'
        _hover={{
          boxShadow: 'dark-lg',
          transform: 'scale(1.01)',
          transition: 'all .2s linear',
        }}
        onClick={handleClick}
      >
        <Image src={image} borderRadius='lg' m=' 1rem auto' w={40} h={220} />
        <Grid
          borderRadius={5}
          p={1}
          m={2}
          templateRows='1fr 1fr'
          alignContent='space-between'
          gap={2}
        >
          <Box>
            <Heading size='xs' mb={5} textAlign='center'>
              {title}
            </Heading>
            <Text fontSize='xl' textAlign='center'>
              $ {price}
            </Text>
          </Box>

          <Box
            display='flex'
            mt='2'
            alignItems='center'
            justifyContent='center'
          >
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < rating.rate ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {rating.count} reviews
            </Box>
          </Box>
        </Grid>
      </Box>
    </Link>
  );
};

export default Item;
