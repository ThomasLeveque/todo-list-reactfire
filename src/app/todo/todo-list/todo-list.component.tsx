import React from 'react';

import TodoItem from '../todo-item/todo-item.component';
import { Todo } from '../todo';
import { TodoListContainer, TodoListItems } from './todo-list.styles';

interface IProps {
  title: string;
  Icon?: any;
  todos: Todo[];
}

const TodoList: React.FC<IProps> = ({ title, todos, Icon }) => {
  return (
    <TodoListContainer>
      <h2>
        {title} <Icon />
      </h2>
      {todos.length > 0 && (
        <TodoListItems>
          {todos.map((todo: Todo, index: number) => {
            return <TodoItem key={index} todo={todo} />;
          })}
        </TodoListItems>
      )}
    </TodoListContainer>
  );
};

export default TodoList;
