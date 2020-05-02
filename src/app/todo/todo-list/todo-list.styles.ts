import styled from 'styled-components';

import colors from '../../app.colors';

export const TodoListContainer = styled.article`
  border: 2px solid ${colors.border};
  padding: 22px;
  border-radius: 16px;
  max-height: 500px;
  overflow-y: auto;
`;

export const TodoListTitle = styled.h2`
  text-align: center;

  span.anticon {
    color: ${colors.primary};
  }
`;

export const TodoListItems = styled.ul`
  margin-top: 10px;
`;

export const TodoListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
