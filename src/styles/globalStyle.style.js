import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after{
    font-family: 'Nanum Gothic', sans-serif;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html{
    font-size: 62.5%;
    width: 100%;
    color: #777;
  }

  body{
    box-sizing: border-box;
    background-color: #f9f9f9;
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
