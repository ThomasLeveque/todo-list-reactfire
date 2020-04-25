import React from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import TodoItem from '../todo-item/todo-item.component';
import { ITodo } from '../../interfaces/todo.interface';

import { TodoListContainer } from './todo-list.styles';

const TodoList: React.FC = () => {
  const firestore = useFirestore();
  const todosRef = firestore.collection('todos');
  const todos: ITodo[] = useFirestoreCollectionData(todosRef);
  return (
    <TodoListContainer>
      {todos.map((todo: ITodo, index: number) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
