import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';

import HomePage from './pages/home';

import { Loader } from './components/loader';
import ReduxCounter from './pages/redux-counter';
import * as routes from './utils/routePaths';

const AuthPage = React.lazy(() => import('./pages/auth'));
const Profile = React.lazy(() => import('./pages/profile'));
const TodoHome = React.lazy(() => import('./pages/todo/todo-home'));
const Counter = React.lazy(() => import('./pages/counter'));
const FakerBooks = React.lazy(() => import('./pages/faker-books'));

function Routes() {
  return (
    <Suspense fallback={<Loader message="Page is Loading..." />}>
      <Switch>
        <Route path={routes.TODO_PATH}>
          <TodoHome />
        </Route>

        <Route path={routes.COUNTER_PATH}>
          <Counter />
        </Route>

        <Route path={routes.PROFILE_PATH}>
          <Profile title="Auth Protected profile page" />
        </Route>

        <Route path={routes.AUTH_PATH}>
          <AuthPage />
        </Route>

        <Route path={routes.FAKER_BOOKS_PATH}>
          <FakerBooks />
        </Route>

        <Route path={routes.REDUX_COUNTER_PATH}>
          <ReduxCounter />
        </Route>

        <Route path={routes.HOME_PATH}>
          <HomePage />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default Routes;
