import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { FirebaseAppProvider } from 'reactfire';

import App from './app/app';
import { MyGlobalStyle, LoadingContainer } from './index.styles';

const firebaseConfig = {
  apiKey: 'AIzaSyDt-zZ9w7VDXJm-2279-qJJBUvrI000_2U',
  authDomain: 'todo-list-reactfire.firebaseapp.com',
  databaseURL: 'https://todo-list-reactfire.firebaseio.com',
  projectId: 'todo-list-reactfire',
  storageBucket: 'todo-list-reactfire.appspot.com',
  messagingSenderId: '1058066527920',
  appId: '1:1058066527920:web:8866f910556b64e6a92d75',
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <MyGlobalStyle />
    <Suspense
      fallback={
        <LoadingContainer>
          <LoadingOutlined />
        </LoadingContainer>
      }
    >
      <App />
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById('root')
);
