import { Box } from '@chakra-ui/layout';
import { Navigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanState, errorSelector, userSelector } from '../store/user';
import LoginForm from './LoginForm';

const Login = () => {
  const toast = useToast();
  const { status, msg } = useSelector(errorSelector);
  const { token } = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'Error') {
      toast({
        title: `Warning: ${msg}`,
        status: 'error',
        isClosable: true,
      });
      dispatch(cleanState());
    } else {
      return;
    }
  }, [status, msg, toast, dispatch]);

  return <Box>{token ? <Navigate to='/' /> : <LoginForm />}</Box>;
};

export default Login;
