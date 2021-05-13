import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';

import HomePage from './pages/home';

import Navigation from './components/navigation';
import Theme from './components/theme';
import { Loader } from './components/loader';

import './App.css';
import ReduxCounter from './pages/redux-counter';

const AuthPage = React.lazy(() => import('./pages/auth'));
const Profile = React.lazy(() => import('./pages/profile'));
const TodoHome = React.lazy(() => import('./pages/todo/todo-home'));
const Counter = React.lazy(() => import('./pages/counter'));
const FakerBooks = React.lazy(() => import('./pages/faker-books'));

function App() {
  return (
    <div className="container">
      <Navigation />
      <hr />
      <Theme>
        <Suspense fallback={<Loader message="Page is Loading..." />}>
          <Switch>
            <Route path="/todos">
              <TodoHome />
            </Route>

            <Route path="/counter">
              <Counter />
            </Route>

            <Route path="/profile">
              <Profile title="Auth Protected profile page" />
            </Route>

            <Route path="/auth">
              <AuthPage />
            </Route>

            <Route path="/faker-books">
              <FakerBooks />
            </Route>

            <Route path="/redux-counter">
              <ReduxCounter />
            </Route>

            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Suspense>
      </Theme>
    </div>
  );
}

export default App;
