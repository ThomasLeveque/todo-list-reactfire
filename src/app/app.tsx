import React from 'react';
import { RocketOutlined } from '@ant-design/icons';
import { useFirestore, useFirestoreCollection } from 'reactfire';

import TodoList from './todo/todo-list/todo-list.component';
import TodoForm from './todo/todo-form/todo-form.component';
import { Todo } from './todo/todo';
import { AppContainer } from './app.styles';

const App: React.FC = () => {
  const firestore = useFirestore();
  const todosRef: firebase.firestore.CollectionReference = firestore.collection('todos');
  const snapshot: firebase.firestore.QuerySnapshot = useFirestoreCollection<null>(todosRef);
  const todos: Todo[] = snapshot.docs.map((doc: firebase.firestore.QueryDocumentSnapshot) => new Todo(doc));

  return (
    <AppContainer>
      <h1>
        My todo list <RocketOutlined />
      </h1>
      <TodoList title="Todo" todos={todos.filter((todo: Todo) => !todo.done)} />
      <TodoList title="Done" todos={todos.filter((todo: Todo) => todo.done)} />
      <TodoForm />
    </AppContainer>
  );
};

export default App;
