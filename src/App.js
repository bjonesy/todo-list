import React from 'react';
import './App.scss';
import Header from './shared/components/Header/Header';
import AppHeader from './layout/components/AppHeader/AppHeader';
import Todo from './shared/components/Todo/Todo';

const App = () => (
  <div className="app">
    <Header isAppHeader>
      <AppHeader title="Todo App" />
    </Header>
    <Todo />
  </div>
);

export default App;
