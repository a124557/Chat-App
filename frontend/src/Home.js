import React from "react";
import { Container, Box } from '@chakra-ui/react'

const Home = () => {
    return <Container
    maxW='md'
    display='flex'
    justifyContent='center'
    >
        <Box 
        bg='white'
         w='100%' 
         p={4} 
         color='black'>
  This is the Box
</Box>
    </Container>
    
};

export default Home;