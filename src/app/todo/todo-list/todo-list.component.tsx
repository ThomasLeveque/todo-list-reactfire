import React from 'react';
import { motion } from 'framer-motion';

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
    <TodoListContainer as={motion.article} initial={false} animate>
      <TodoListTitle as={motion.h2} animate>
        {title} <Icon />
      </TodoListTitle>
      {todos.length > 0 && (
        <TodoListItems>
          {todos.map((todo: Todo) => {
            return (
              <TodoListItem as={motion.li} animate key={todo.id}>
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
