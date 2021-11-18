import { Grid } from '@chakra-ui/layout';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectProductsPrice } from '../store/products';
import Item from './Item';

// Creates the list containing all the shop items
const ListItems = () => {
  const productsList = useSelector(selectProductsPrice);

  return (
    <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={0.5}>
      {productsList &&
        productsList.map(({ id, title, price, image, rating }) => (
          <Item
            key={id}
            itemID={id}
            title={title}
            price={price}
            image={image}
            rating={rating}
          />
        ))}
    </Grid>
  );
};

export default ListItems;
