import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider,ColorMode } from 'theme-ui'
// import './index.scss';

import Application from './components/Application';


const theme= {
    
    fonts: {
      body: 'system-ui, sans-serif',
      heading: '"Avenir Next", sans-serif',
      monospace: 'Menlo, monospace',
    },
    initialColorMode: 'light',
    // optionally enable custom properties
    // to help avoid a flash of colors on page load
    useCustomProperties: true,
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#07c',
        modes: {
          dark: {
            text: '#fff',
            background: '#000',
            primary: '#0cf',
          },
          papaya: {
            // this color mode will fallback to the root color object
            // for values not defined here
            text: '#433',
            background: 'papayawhip',
          }
        }
      },
      styles: {
        h1: {
          fontSize: 32,
          fontFamily: 'heading',
          fontWeight: 'heading',
          color: 'primary',
          mt: 4,
          mb: 2,
        },
        button :{
       
          width: 100,
         
        },
        buttons: {
          primary: {
            // you can reference other values defined in the theme
            color: 'white',
            bg: 'primary',
          },
          secondary: {
            color: 'text',
            bg: 'secondary',
          },
        }
      }
  }

render(  <ThemeProvider theme={theme}>
     <ColorMode />
<Application />
</ThemeProvider> , document.getElementById('root'));
