import { FormControl } from '@chakra-ui/form-control';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/input';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import { MdPerson, MdLock } from 'react-icons/md';
import React, { useState } from 'react';
import { Button } from '@chakra-ui/button';
import { useDispatch } from 'react-redux';
import { getUser, postUser } from '../store/user';
import Loading from '../helper/Loading';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => setShow(!show);

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    dispatch(getUser(username));
    dispatch(postUser(username, password));

    setUsername('');
    setPassword('');

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <Flex
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      h='calc(100vh - 15rem)'
    >
      <Box textAlign='center' mb={5}>
        <Heading color='teal.500'>Welcome!</Heading>
        <Text>If you already have an account, login here.</Text>
      </Box>
      {loading ? (
        <Loading />
      ) : (
        <Stack
          flexDirection='column'
          bg={{ base: 'none', md: 'gray.200' }}
          borderRadius='lg'
        >
          <form onSubmit={handleSubmit}>
            <Stack
              p={{ base: 5, md: 10 }}
              spacing={{ base: 6, md: 4 }}
              boxShadow={{ base: 'none', md: 'dark-lg' }}
              borderRadius='lg'
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<MdPerson />}
                  />
                  <Input
                    focusBorderColor='teal.500'
                    _hover={{ borderColor: 'teal.500' }}
                    borderColor='gray.400'
                    variant='outline'
                    placeholder='Username'
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  ></Input>
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<MdLock />}
                  />
                  <Input
                    type={show ? 'text' : 'password'}
                    _hover={{ borderColor: 'teal.500' }}
                    focusBorderColor='teal.500'
                    borderColor='gray.400'
                    variant='outline'
                    placeholder='Password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  ></Input>
                  <InputRightElement width='4.5rem'>
                    <Button
                      onClick={handleClick}
                      size='sm'
                      bg='teal.500'
                      color='white'
                      _hover={{ bg: 'teal.600' }}
                      _focus={{ border: '2px', borderColor: 'teal.600' }}
                    >
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button type='submit' colorScheme='teal'>
                Login
              </Button>
            </Stack>
          </form>
        </Stack>
      )}
      <Box textAlign='center' mt={10}>
        <Heading color='gray.500' size='sm'>
          Example:
        </Heading>
        <Text color='gray.400'>username: mor_2314</Text>
        <Text color='gray.400'>password: 83r5^_</Text>
      </Box>
    </Flex>
  );
};

export default LoginForm;
