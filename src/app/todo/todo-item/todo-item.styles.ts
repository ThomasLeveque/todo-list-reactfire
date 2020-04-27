import styled from 'styled-components';

import colors from '../../app.colors';

interface ITodoItemProps {
  done: boolean;
}

export const TodoItemContainer = styled.div<ITodoItemProps>`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 20px;
  align-items: center;
  background-color: ${colors.background};
  border: 2px solid ${colors.border};
  border-radius: 12px;
  padding: 10px;

  h3 {
    text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
    opacity: ${({ done }) => (done ? '0.5' : '1')};
    font-size: 15px;
    font-weight: 400;
    word-break: break-word;
  }

  input {
    font-size: 15px;
    font-weight: 400;
    background: transparent;
    border: none;
    width: 100%;
  }
`;

export const TodoItemIcons = styled.div`
  justify-self: end;

  span.anticon {
    font-size: 20px;

    &:nth-child(2) {
      margin: 0 5px;
    }
  }
`;
