import React from 'react';
import { RocketOutlined, ThunderboltOutlined, TrophyOutlined } from '@ant-design/icons';
import { useFirestore, useFirestoreCollection } from 'reactfire';
import { motion } from 'framer-motion';

import TodoList from './todo/todo-list/todo-list.component';
import TodoForm from './todo/todo-form/todo-form.component';
import { Todo } from './todo/todo';
import { AppContainer, TodoLists, TodoTitle } from './app.styles';

const App: React.FC = () => {
  const firestore = useFirestore();
  const todosRef: firebase.firestore.Query = firestore.collection('todos').orderBy('createdAt', 'desc');
  const snapshot: firebase.firestore.QuerySnapshot = useFirestoreCollection<null>(todosRef);
  const todos: Todo[] = snapshot.docs.map((doc: firebase.firestore.QueryDocumentSnapshot) => new Todo(doc));

  return (
    <AppContainer as={motion.div} animate="animate" initial="initial">
      <TodoTitle>
        My Todolist <RocketOutlined />
      </TodoTitle>
      <TodoForm />
      <TodoLists>
        <TodoList title="Todo" Icon={ThunderboltOutlined} todos={todos.filter((todo: Todo) => !todo.done)} />
        <TodoList title="Done" Icon={TrophyOutlined} todos={todos.filter((todo: Todo) => todo.done)} />
      </TodoLists>
    </AppContainer>
  );
};

export default App;
