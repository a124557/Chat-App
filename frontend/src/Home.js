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
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  //Defining states
  const [showState, setShowState] = useState(false);

  //Defining functions to handle states
  const handleClick = () => setShowState(!showState);

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
              <InputGroup>
                <InputLeftElement pointerEvents={'none'} id={'userIcon'}>
                  <IconContext.Provider value={{ size: '1em' }}>
                    <div>
                      <RiMailLine />
                    </div>
                  </IconContext.Provider>
                </InputLeftElement>
                <Input size="lg" placeholder="Email"></Input>
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents={'none'} id={'passwordIcon'}>
                  <IconContext.Provider value={{ size: '1em' }}>
                    <div>
                      <RiLockPasswordLine />
                    </div>
                  </IconContext.Provider>
                </InputLeftElement>

                <Input size="lg" placeholder="Password" type={showState ? "text" : "password"}></Input>
                <InputRightElement id={'eye'} onClick={handleClick}>
                  <IconContext.Provider value={{ size: '1em' }}>
                    <div>
                      {showState ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </div>
                  </IconContext.Provider>
                </InputRightElement>
              </InputGroup>
              <Button colorScheme={'twitter'}>Log in</Button>
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
