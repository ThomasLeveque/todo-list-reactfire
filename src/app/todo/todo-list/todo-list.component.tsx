import React from 'react';
import { useTransition, animated } from 'react-spring';

import TodoItem from '../todo-item/todo-item.component';
import { Todo } from '../todo';
import { TodoListContainer, TodoListItems } from './todo-list.styles';

interface IProps {
  title: string;
  Icon?: any;
  todos: Todo[];
}

const TodoList: React.FC<IProps> = ({ title, todos, Icon }) => {
  const transitions = useTransition(todos, (todo: any) => todo.id, {
    from: { opacity: 0, transform: 'translateX(-10px)' },
    enter: { opacity: 1, transform: 'translateX(0)' },
    leave: { opacity: 0, transform: 'translateX(10px)' },
  });

  return (
    <TodoListContainer>
      <h2>
        {title} <Icon />
      </h2>
      {todos.length > 0 && (
        <TodoListItems>
          {transitions.map(({ item, props, key }) => {
            return (
              <animated.li key={key} style={props}>
                <TodoItem todo={item} />
              </animated.li>
            );
          })}
        </TodoListItems>
      )}
    </TodoListContainer>
  );
};

export default TodoList;
