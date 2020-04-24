import { createGlobalStyle } from 'styled-components';

export const MyGlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fjalla+One&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Fjalla One', sans-serif;
    background-color: white;
  }
`;
