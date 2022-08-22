import React from 'react';
import {
  ChakraProvider,
  Button,
  theme,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme='blue'>Button</Button>
    </ChakraProvider>
  );
}

export default App;
