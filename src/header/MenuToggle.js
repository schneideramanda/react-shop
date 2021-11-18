import { Box } from '@chakra-ui/layout';
import React from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <MdClose /> : <MdMenu />}
    </Box>
  );
};

export default MenuToggle;
