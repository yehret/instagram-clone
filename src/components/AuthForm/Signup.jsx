import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';
import useSignUpWithEmailAndPassword from '../../hooks/useSignUpWithEmailAndPassword';

const Signup = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    fullName: '',
    username: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, signup } = useSignUpWithEmailAndPassword();

  return (
    <>
      <Input
        placeholder="Email"
        type="email"
        fontSize={14}
        value={inputs.email}
        size={'sm'}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder="Username"
        type="text"
        fontSize={14}
        value={inputs.username}
        size={'sm'}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />
      <Input
        placeholder="Full Name"
        type="text"
        fontSize={14}
        size={'sm'}
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
      />
      <InputGroup>
        <Input
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
          fontSize={14}
          value={inputs.password}
          size={'sm'}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement h={'full'}>
          <Button variant={'ghost'} size={'sm'} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}

      <Button
        w={'full'}
        colorScheme="blue"
        size={'sm'}
        fontSize={14}
        isLoading={loading}
        onClick={() => signup(inputs)}>
        Sign Up
      </Button>
    </>
  );
};

export default Signup;
