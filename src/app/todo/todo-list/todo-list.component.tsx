import React from 'react';

import TodoItem from '../todo-item/todo-item.component';
import { Todo } from '../todo';
import { TodoListContainer, TodoListItems, TodoListItem, TodoListTitle } from './todo-list.styles';

interface IProps {
  title: string;
  Icon?: any;
  todos: Todo[];
}

const TodoList: React.FC<IProps> = ({ title, todos, Icon }) => {
  return (
    <TodoListContainer initial={false} animate>
      <TodoListTitle animate>
        {title} <Icon />
      </TodoListTitle>
      {todos.length > 0 && (
        <TodoListItems>
          {todos.map((todo: Todo, index: number) => {
            return (
              <TodoListItem animate key={index}>
                <TodoItem todo={todo} />
              </TodoListItem>
            );
          })}
        </TodoListItems>
      )}
    </TodoListContainer>
  );
};

export default TodoList;
