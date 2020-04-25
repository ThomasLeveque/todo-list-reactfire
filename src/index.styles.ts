import { createGlobalStyle } from 'styled-components';

export const MyGlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: 'Fjalla One', sans-serif;
    background-color: white;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
