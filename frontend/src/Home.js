import { React, useState } from 'react';
import './Home.css';
import { IconContext } from 'react-icons/lib';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RiLockPasswordLine, RiMailLine } from 'react-icons/ri';
import {
  Container,
  Box,
  Text,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  StackDivider,
  InputRightElement,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  useToast,
  Toast
} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  //Defining states
  const [showState, setShowState] = useState(false);
  const [emailState, setEmailState] = useState('');
  const [submitState, setSubmitState] = useState(false)
  const [passState, setPassState] = useState('');
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const submitHandler  = async () => {
    setLoading(true);
    if(!emailState || passState) {
      Toast({
        title: "Please fill all fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom"
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const {data} = await axios.post(
        "/api/user/login",
        {emailState, passState},
        config
      );

      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom"
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);
        navigate("/chats");
    } catch(error) {
      toast({
        title: "An error has occured",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  //Defining functions to handle states
  const handleClick = () => setShowState(!showState);
  const handleEmail = (email) => setEmailState(email.target.value);
  // eslint-disable-next-line
  const handleSubmit = () => setSubmitState(true);
  const handlePass = (password) => setPassState(password.target.value);

  const emailError = submitState === true && emailState === '';
  const passError = submitState === true && passState === '';

  return (
    <Container maxW="lg">
      <Box
        bg="rgb(255,255,255,0.95)"
        w="100%"
        p={4}
        color="black"
        display={'flex'}
        justifyContent={'center'}
        alignItems="center"
        borderRadius="md"
      >
        <Stack spacing="4" display="flex" alignItems={'center'}>
          <Stack spacing={'0'}>
            <Text fontSize={'4xl'}>Welcome</Text>
            <Text fontSize={'1xl'}>Please login below</Text>
          </Stack>
          <Stack
            divider={<StackDivider borderColor="gray.400" />}
            alignItems={'center'}
            spacing={'5'}
          >
            <Stack spacing={'4'}>
              <FormControl isInvalid={emailError}>

              <InputGroup>
                <InputLeftElement pointerEvents={'none'} id={'userIcon'}>
                  <IconContext.Provider value={{ size: '1em' }}>
                    <div>
                      <RiMailLine />
                    </div>
                  </IconContext.Provider>
                </InputLeftElement>
                <Input size="lg" placeholder="Email" type={'email'} value={emailState} onChange={handleEmail}></Input>
              </InputGroup>
              {emailError && submitState === true ? (
                <FormErrorMessage>Please enter an email</FormErrorMessage>
              ) : (<FormHelperText></FormHelperText>)}
              </FormControl>
              <FormControl isInvalid={passError}>

              <InputGroup>
                <InputLeftElement pointerEvents={'none'} id={'passwordIcon'}>
                  <IconContext.Provider value={{ size: '1em' }}>
                    <div>
                      <RiLockPasswordLine />
                    </div>
                  </IconContext.Provider>
                </InputLeftElement>

                <Input size="lg" placeholder="Password" value={passState} onChange={handlePass} type={showState ? "text" : "password"}></Input>
                <InputRightElement id={'eye'} onClick={handleClick}>
                  <IconContext.Provider value={{ size: '1em' }}>
                    <div>
                      {showState ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </div>
                  </IconContext.Provider>
                </InputRightElement>
              </InputGroup>
              {submitState && passError ? (
                <FormErrorMessage>Please enter a password</FormErrorMessage>
              ) : (<FormHelperText></FormHelperText>)}
              </FormControl>
              <Button colorScheme={'twitter'} onClick={submitHandler} isLoading={loading}>Log in</Button>
            </Stack>
            <Text fontSize={'sm'}>
              Don't have an account?
              <NavLink to="/signup"> Sign up</NavLink>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default Home;
