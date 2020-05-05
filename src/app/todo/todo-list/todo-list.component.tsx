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

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const animateItem = {
  animate: { opacity: 1, scale: 1, y: 0 },
  initial: { opacity: 0, scale: 0.8, y: 20 },
};

const TodoList: React.FC<IProps> = ({ title, todos, Icon }) => {
  return (
    <TodoListContainer as={motion.article} initial={false} animate>
      <TodoListTitle as={motion.h2} animate>
        {title} <Icon />
      </TodoListTitle>
      {todos.length > 0 && (
        <TodoListItems as={motion.ul} variants={stagger}>
          {todos.map((todo: Todo) => {
            return (
              <TodoListItem as={motion.li} variants={animateItem} key={todo.id}>
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
