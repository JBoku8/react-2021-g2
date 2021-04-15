import { Route, Switch } from 'react-router';

import HomePage from './pages/home';
import Counter from './pages/counter';
import TodoHome from './pages/todo/todo-home';
import Profile from './pages/profile';

import Navigation from './components/navigation';
import Theme from './components/theme';

import './App.css';

function App() {
  return (
    <div className="container">
      <Navigation />
      <hr />
      <Theme>
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

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Theme>
    </div>
  );
}

export default App;
