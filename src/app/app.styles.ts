import styled from 'styled-components';

import colors from './app.colors';

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px 20px;
`;

export const TodoLists = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  column-gap: 20px;
  row-gap: 20px;
  align-items: start;
`;

export const TodoTitle = styled.h1`
  width: 100%;
  text-align: center;

  span.anticon {
    color: ${colors.primary};
  }
`;
