import { Box, Text } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../store/products';

// Creates the filter option for the items list
const Filter = ({ openFilter }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('');

  const handleChange = ({ target }) => {
    setSelected(target.value);
    dispatch(changeFilter(target.value));
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
      <Text>Sort by:</Text>
      <Select
        mt={2}
        borderColor='teal.500'
        placeholder='Select option'
        value={selected}
        onChange={handleChange}
      >
        <option value='high'>Highest Price</option>
        <option value='low'>Lowest Price</option>
      </Select>
    </Box>
  );
};

export default Filter;
