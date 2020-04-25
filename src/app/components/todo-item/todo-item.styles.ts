import styled from 'styled-components';

interface ITodoItemProps {
  done: boolean;
}

export const TodoItemContainer = styled.li<ITodoItemProps>`
  width: 100%;

  h4 {
    text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
  }
`;
