import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStylesComponent = createGlobalStyle`
  :root {
    --cell-size: 50px;
    --slide-transition-duration: 0.85s;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    overflow: hidden;
  }
`;

const GlobalStyles = () => {
  return <GlobalStylesComponent />;
};

export default GlobalStyles;
