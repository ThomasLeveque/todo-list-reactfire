import React from 'react';
import { useFirestore, useFirestoreCollection } from 'reactfire';
import TodoItem from '../todo-item/todo-item.component';
import { ITodo } from '../../interfaces/todo.interface';

import { TodoListContainer } from './todo-list.styles';

const TodoList: React.FC = () => {
  const firestore = useFirestore();
  const todosRef: firebase.firestore.CollectionReference = firestore.collection('todos');
  const snapshot: firebase.firestore.QuerySnapshot = useFirestoreCollection<null>(todosRef);
  const todos: ITodo[] = snapshot.docs.map(
    (doc: firebase.firestore.QueryDocumentSnapshot) => ({ id: doc.id, ...doc.data() } as ITodo)
  );
  return (
    <TodoListContainer>
      <h2>Todo :</h2>
      {todos
        .filter(({ done }: ITodo) => !done)
        .map((todo: ITodo, index: number) => {
          return <TodoItem key={index} todo={todo} />;
        })}
      <h2>Done :</h2>
      {todos
        .filter(({ done }: ITodo) => done)
        .map((todo: ITodo, index: number) => {
          return <TodoItem key={index} todo={todo} />;
        })}
    </TodoListContainer>
  );
};

export default TodoList;
