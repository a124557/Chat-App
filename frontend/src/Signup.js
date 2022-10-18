import { React, useState } from 'react';
import './Signup.css';
import { IconContext } from 'react-icons/lib';
import {
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai';
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
  InputRightElement,
  useToast,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  //Defining states
  const [showPassState, setShowPassState] = useState(false);
  const [showConfirmPassState, setConfirmPassState] = useState(false);
  const [nameState, setNameState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [submitState, setSubmitState] = useState(false);
  const [passState, setPassState] = useState('');
  const [passConfirmState, setPassConfirmState] = useState('');
  const [picture, setPicture] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const postDetails = (pics) => {
    setLoading(true);
    if(picture === undefined) {
      toast({
        title: "Please select an image",
        status: 'warning',
         duration: 5000,
         isClosable: true,
         position: "bottom"
      });
      return;

    }
    if(pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dwwaise5l");
      fetch("CLOUDINARY_URL=cloudinary://647214422713977:KBMxUcIkFh9i5gb1TJE-5I48D0k@dwwaise5l", {
        method: 'post', 
        body:data,

      }).then((res) => res.json())
      .then((data) => {
        setPicture(data.url.toString());
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    } else {
      toast({
        title: "Please select an image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
  };


  //Defining functions to handle states
  const handleShowPassState = () => setShowPassState(!showPassState);
  const handleConfirmShowPassState = () =>
    setConfirmPassState(!showConfirmPassState);
  const handleNameState = name => setNameState(name.target.value);
  const handleEmailState = email => setEmailState(email.target.value);
  const handleSubmit = () => setSubmitState(true);
  const handlePass = password => setPassState(password.target.value);
  const handleConfirmPass = confirmPass =>
    setPassConfirmState(confirmPass.target.value);

    

  const passError = submitState === true && passState !== passConfirmState;
  const noPassError =
    submitState === true && passState === '' && passConfirmState === '';
  const nameError = submitState === true && nameState === '';
  const emailError = submitState === true && emailState === '';

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
              <FormControl isInvalid={nameError}>
                <InputGroup>
                  <InputLeftElement pointerEvents={'none'} id={'userIcon'}>
                    <IconContext.Provider value={{ size: '1em' }}>
                      <div>
                        <AiOutlineUser />
                      </div>
                    </IconContext.Provider>
                  </InputLeftElement>
                  <Input
                    size="lg"
                    placeholder="Name"
                    value={nameState}
                    onChange={handleNameState}
                  ></Input>
                </InputGroup>
                {nameError ? (
                  <FormErrorMessage>Please enter a name</FormErrorMessage>
                ) : (
                  <FormHelperText></FormHelperText>
                )}
              </FormControl>
              <FormControl isInvalid={emailError}>
                <InputGroup>
                  <InputLeftElement pointerEvents={'none'} id={'passwordIcon'}>
                    <IconContext.Provider value={{ size: '1em' }}>
                      <div>
                        <RiMailLine />
                      </div>
                    </IconContext.Provider>
                  </InputLeftElement>
                  <Input
                    size="lg"
                    placeholder="Email address"
                    value={emailState}
                    onChange={handleEmailState}
                    type="email"
                  ></Input>
                </InputGroup>
                {emailError ? (
                  <FormErrorMessage>
                    Please enter an email address
                  </FormErrorMessage>
                ) : (
                  <FormHelperText></FormHelperText>
                )}
              </FormControl>
              <FormControl isInvalid={passError || noPassError}>
                <InputGroup>
                  <InputLeftElement pointerEvents={'none'} id={'passwordIcon'}>
                    <IconContext.Provider value={{ size: '1em' }}>
                      <div>
                        <RiLockPasswordLine />
                      </div>
                    </IconContext.Provider>
                  </InputLeftElement>
                  <Input
                    size="lg"
                    placeholder="Password"
                    value={passState}
                    onChange={handlePass}
                    type={showPassState ? 'text' : 'password'}
                  ></Input>
                  <InputRightElement id={'eye'} onClick={handleShowPassState}>
                    <IconContext.Provider value={{ size: '1em' }}>
                      <div>
                        {showPassState ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </div>
                    </IconContext.Provider>
                  </InputRightElement>
                </InputGroup>
                {noPassError ? (
                  <FormErrorMessage>Please enter a password</FormErrorMessage>
                ) : passError ? (
                  <FormErrorMessage>Passwords do not match</FormErrorMessage>
                ) : (
                  <FormHelperText></FormHelperText>
                )}
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
                  <Input
                    size="lg"
                    placeholder="Confirm Password"
                    value={passConfirmState}
                    type={showConfirmPassState ? 'text' : 'password'}
                    onChange={handleConfirmPass}
                  ></Input>
                  <InputRightElement
                    id={'eye'}
                    onClick={handleConfirmShowPassState}
                  >
                    <IconContext.Provider value={{ size: '1em' }}>
                      <div>
                        {showConfirmPassState ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </div>
                    </IconContext.Provider>
                  </InputRightElement>
                </InputGroup>
                {passError ? (
                  <FormErrorMessage>Passwords do not match</FormErrorMessage>
                ) : (
                  <FormHelperText></FormHelperText>
                )}
              </FormControl>

              <FormControl>
                <InputGroup>
                <InputLeftElement pointerEvents={'none'}>
                  <IconContext.Provider value = {{size: '1em'}}>
                    <div>
                      <AiOutlineUser/>
                    </div>
                  </IconContext.Provider>
                </InputLeftElement>
                <Input
                size="lg"
                type={'file'}
                name = 'img'
                onChange = {(e) => postDetails(e.target.files[0])}
                ></Input>
                </InputGroup>
              </FormControl>
              <Button colorScheme={'twitter'} onClick={handleSubmit} isLoading={loading}>
                Sign up
              </Button>
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
