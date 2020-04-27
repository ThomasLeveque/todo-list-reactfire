import styled, { createGlobalStyle } from 'styled-components';

import colors from './app/app.colors';

export const MyGlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: white;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button, input {
    font-family: 'Montserrat', sans-serif;
  }
`;

export const LoadingContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span.anticon {
    color: ${colors.primary};
    font-size: 30px;
  }
`;
