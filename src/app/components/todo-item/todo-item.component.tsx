import React from 'react';
import { ITodo } from '../../interfaces/todo.interface';

import { TodoItemContainer } from './todo-item.styles';

interface IProps {
  todo: ITodo;
}

const TodoItem: React.FC<IProps> = ({ todo }) => {
  return (
    <TodoItemContainer key={todo.value}>
      <h4>{todo.value}</h4>
    </TodoItemContainer>
  );
};

export default TodoItem;
