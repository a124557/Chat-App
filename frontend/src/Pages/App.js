import "./App.css";
import React from 'react';
import { Route } from 'react-router-dom';
import Home from "./Home";
/*import {
  Button,
} from '@chakra-ui/react';*/

function App() {
  return (
    <div className = "App">
        <Route path = "/" component = {Home}  />
      </div>
  );
}

export default App;
