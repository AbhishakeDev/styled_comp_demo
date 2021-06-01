import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './themes/globalStyles';
import { Theme } from './themes/Theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  //wrapping in the theme prvider provides css variables from Theme that are accessible throughout the app
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
