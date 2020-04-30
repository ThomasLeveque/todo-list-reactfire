import styled from 'styled-components';
import { motion } from 'framer-motion';

import colors from '../../app.colors';

interface ITodoItemContentProps {
  done: boolean;
}

export const TodoItemContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 20px;
  align-items: center;
  background-color: ${colors.background};
  border: 2px solid ${colors.border};
  border-radius: 12px;
  padding: 10px;

  span.anticon {
    font-size: 20px;
  }
`;

export const TodoItemContent = styled.div<ITodoItemContentProps>`
  display: flex;

  span.anticon {
    margin-right: 8px;
  }

  h3 {
    text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
    opacity: ${({ done }) => (done ? '0.5' : '1')};
    font-size: 15px;
    font-weight: 400;
    word-break: break-word;
    justify-self: start;
    width: 100%;
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

  span.anticon:first-child {
    margin-right: 8px;
  }
`;
