import './App.css';
import Home from './Home';
import Signup from './Signup';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*import {
  Button,
} from '@chakra-ui/react';*/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
