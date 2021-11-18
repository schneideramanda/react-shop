import { IconButton } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Box } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { MdOutlineFilterList } from 'react-icons/md';
import Filter from './Filter';

const FilterHeader = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const toggle = () => setOpenFilter(!openFilter);

  return (
    <Box textAlign='right' m={4}>
      <IconButton colorScheme='teal' onClick={toggle}>
        <Icon as={MdOutlineFilterList} />
      </IconButton>
      <Filter openFilter={openFilter} />
    </Box>
  );
};

export default FilterHeader;
