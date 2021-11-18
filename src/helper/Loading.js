import { Box } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import React from 'react';

const Loading = () => {
  return (
    <Box
      w='100%'
      h='100%'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
    >
      <Spinner
        size='xl'
        thickness='5px'
        speed='0.6s'
        color='teal.500'
        mt={250}
      />
      ;
    </Box>
  );
};

export default Loading;
