import {React, useState} from 'react';
import './Signup.css';
import { IconContext } from 'react-icons/lib';
import { AiOutlineUser, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
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
  FormControl,
  FormErrorMessage,
  FormHelperText,
  InputRightElement
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';


const Home = () => {
    //Defining states
  const [showPassState, setShowPassState] = useState(false);
  const [emailState, setEmailState] = useState('');
  const [submitState, setSubmitState] = useState(false)
  const [passState, setPassState] = useState('');
  const [passConfirmState, setPassConfirmState] = useState('');

  //Defining functions to handle states
  const handleShowPassState = () => setShowPassState(!showPassState);
  const handleSubmit = () => setSubmitState(true);
  const handlePass = (password) => setPassState(password.target.value);
  const handleConfirmPass = (confirmPass) => setPassConfirmState(confirmPass.target.value);

  const passError = submitState === true && passState !== passConfirmState;

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
          <Stack spacing={'0'} alignItems={'center'}>
            <Text fontSize={'4xl'}>Get Started</Text>
            <Text fontSize={'1xl'}>
              Please create a username and password below
            </Text>
          </Stack>
          <Stack
            divider={<StackDivider borderColor="gray.400" />}
            alignItems={'center'}
            spacing={'5'}
          >
            <Stack spacing={'4'}>
              <InputGroup>
                <InputLeftElement pointerEvents={'none'} id={'userIcon'}>
                  <IconContext.Provider value={{ size: '1em' }}>
                    <div>
                      <AiOutlineUser />
                    </div>
                  </IconContext.Provider>
                </InputLeftElement>
                <Input size="lg" placeholder="Name"></Input>
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents={'none'} id={'passwordIcon'}>
                  <IconContext.Provider value={{ size: '1em' }}>
                    <div>
                      <RiMailLine />
                    </div>
                  </IconContext.Provider>
                </InputLeftElement>
                <Input size="lg" placeholder="Email address"></Input>
              </InputGroup>
              <FormControl isInvalid={passError}>

              <InputGroup>
                <InputLeftElement pointerEvents={'none'} id={'passwordIcon'}>
                  <IconContext.Provider value={{ size: '1em' }}>
                    <div>
                      <RiLockPasswordLine />
                    </div>
                  </IconContext.Provider>
                </InputLeftElement>
                <Input size="lg" placeholder="Password" value={passState} onChange={handlePass} type={showPassState ? "text" : "password"}></Input>
                                <InputRightElement id={'eye'} onClick={handleShowPassState}>
                  <IconContext.Provider value={{ size: '1em' }}>
                    <div>
                      {showPassState ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </div>
                  </IconContext.Provider>
                </InputRightElement>
              </InputGroup>
              {passError ? (
                <FormErrorMessage>Passwords do not match</FormErrorMessage>
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
                <Input size="lg" placeholder="Confirm Password" value={passConfirmState} onChange={handleConfirmPass}></Input>
              </InputGroup>
                            {passError ? (
                <FormErrorMessage>Passwords do not match</FormErrorMessage>
              ) : (<FormHelperText></FormHelperText>)}
              </FormControl>
              <Button colorScheme={'twitter'} onClick={handleSubmit}>Sign up</Button>
            </Stack>
            <Text fontSize={'sm'}>
              Already have an account? <NavLink to="/"> Login</NavLink>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default Home;
