import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after{
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html{
    font-size: 62.5%;
  }

  body{
    box-sizing: border-box;
  }

  ul, ol, li{
    list-style: none;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
