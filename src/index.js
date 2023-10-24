import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ApiContext from './Context/ApiContext';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
const root = ReactDOM.createRoot(document.getElementById('root'));
const customTheme = extendTheme({
  styles: {
    global: {
      "*": {
        margin: 0,
        padding: 0,
      },
    },
  },
    config :{
      initialColorMode: 'light',
      useSystemColorMode: false,
    },
  
});

root.render(
  <ApiContext>
  
    <ChakraProvider theme={customTheme}>
    <ColorModeScript initialColorMode={customTheme.config.initialColorMode} ></ColorModeScript>
      <App />
    </ChakraProvider>
  </ApiContext>


);
