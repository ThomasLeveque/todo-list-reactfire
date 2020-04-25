import React, { Suspense } from 'react';
import { RocketOutlined } from '@ant-design/icons';
import TodoList from './components/todo-list/todo-list.component';
import TodoForm from './components/todo-form/todo-form.component';

import { AppContainer } from './app.styles';

const App: React.FC = () => {
  return (
    <AppContainer>
      <h1>
        My todo list <RocketOutlined />
      </h1>
      <Suspense fallback="Loading...">
        <TodoList />
      </Suspense>
      <TodoForm />
    </AppContainer>
  );
};

export default App;
