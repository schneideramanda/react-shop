import { Box, Grid, Text } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeCategory,
  changeSort,
  selectAllCategories,
} from '../store/products';

// Creates the filter option for the items list
const Filter = ({ openFilter }) => {
  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');
  const availableCategories = useSelector(selectAllCategories);
  const dispatch = useDispatch();

  // Format categories to capitalize the word's first letter
  // This will modify the value and the options
  const formattedCategories = availableCategories.map((category) => {
    return (category = category
      .toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' '));
  });

  const handleSort = ({ target }) => {
    setSort(target.value);
    dispatch(changeSort(target.value));
  };

  const handleCategory = ({ target }) => {
    setCategory(target.value);
    dispatch(changeCategory(target.value));
  };

  return (
    <Box
      display={openFilter ? 'block' : 'none'}
      mt={4}
      p={2}
      bg='gray.200'
      borderRadius='md'
      textAlign='center'
    >
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={5}>
        <Box>
          <Text>Sort by:</Text>
          <Select
            mt={2}
            borderColor='teal.500'
            placeholder='Select option'
            value={sort}
            onChange={handleSort}
          >
            <option value='high'>Highest Price</option>
            <option value='low'>Lowest Price</option>
          </Select>
        </Box>
        <Box>
          <Text>Category:</Text>
          <Select
            mt={2}
            borderColor='teal.500'
            value={category}
            onChange={handleCategory}
            placeholder='Select option'
          >
            {formattedCategories &&
              formattedCategories.map((opt, ind) => (
                <option key={ind} value={opt}>
                  {opt}
                </option>
              ))}
          </Select>
        </Box>
      </Grid>
    </Box>
  );
};

export default Filter;
