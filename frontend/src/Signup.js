import React from 'react';
import './Signup.css';
import { IconContext } from 'react-icons/lib';
import { AiOutlineUser } from 'react-icons/ai';
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
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Home = () => {
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
              <InputGroup>
                <InputLeftElement pointerEvents={'none'} id={'passwordIcon'}>
                  <IconContext.Provider value={{ size: '1em' }}>
                    <div>
                      <RiLockPasswordLine />
                    </div>
                  </IconContext.Provider>
                </InputLeftElement>
                <Input size="lg" placeholder="Password"></Input>
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents={'none'} id={'passwordIcon'}>
                  <IconContext.Provider value={{ size: '1em' }}>
                    <div>
                      <RiLockPasswordLine />
                    </div>
                  </IconContext.Provider>
                </InputLeftElement>
                <Input size="lg" placeholder="Confirm Password"></Input>
              </InputGroup>
              <Button colorScheme={'twitter'}>Sign up</Button>
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
