import { Flex } from '@chakra-ui/layout';
import React, { useState } from 'react';

import Logo from './Logo';
import Menu from './Menu';
import MenuToggle from './MenuToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      mb={8}
      p={8}
      bg='gray.200'
    >
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <Menu isOpen={isOpen} toggle={toggle} />
    </Flex>
  );
};

export default Header;
