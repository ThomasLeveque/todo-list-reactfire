import styled from 'styled-components';

interface ITodoItemProps {
  done: boolean;
}

export const TodoItemContainer = styled.div<ITodoItemProps>`
  h3 {
    text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
  }

  input {
  }
`;

export const TodoItemIcons = styled.div`
  span.anticon {
  }
`;
