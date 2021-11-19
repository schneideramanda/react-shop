import { Flex, Heading, Stack } from '@chakra-ui/layout';
import React from 'react';
import { Button } from '@chakra-ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout, userSelector } from '../store/user';
import { Avatar, AvatarBadge } from '@chakra-ui/avatar';
import { Navigate } from 'react-router';

const LoginForm = () => {
  const { user, token } = useSelector(userSelector);
  const dispatch = useDispatch();

  if (token === '') return <Navigate to='/login' />;

  const handleClick = () => {
    dispatch(userLogout());
  };

  return (
    <Flex
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      h='calc(100vh - 15rem)'
    >
      <Heading mb={6} color='teal.500'>
        Your User
      </Heading>
      <Stack flexDirection='column' bg='gray.200' borderRadius='lg'>
        <Stack
          p={{ base: 5, md: 10 }}
          spacing={{ base: 6, md: 4 }}
          boxShadow='dark-lg'
          borderRadius='lg'
        >
          <Flex justifyContent='center'>
            <Avatar>
              <AvatarBadge boxSize='1.25em' bg='green.500' />
            </Avatar>
          </Flex>
          <Flex alignItems='center'>
            <Heading color='gray.500'>@ </Heading>
            <Heading size='lg' ml={2}>
              {user}
            </Heading>
          </Flex>
          <Button colorScheme='teal' onClick={handleClick}>
            Logout
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default LoginForm;
