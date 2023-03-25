import { createGlobalStyle } from 'styled-components';

import { devices } from '../utils/responsivity';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: proxima-nova, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 18px;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
  }


  a {
    color: ${({ theme }) => theme.yellow};
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  @media ${devices.mobileL} {
    html {
      font-size: 87.5%;
    }
  }

  @media ${devices.mobileM} {
    html {
      font-size: 85%;
    }
  }

  @media ${devices.mobileS} {
    html {
      font-size: 70%;
    }
  }

  @media (max-width: 270px) {
    html {
      font-size: 60%;
    }
  }
`;
