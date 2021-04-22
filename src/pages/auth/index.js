import classNames from 'classnames';
import { Redirect, Route, Switch, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import SignInPage from './sign-in';
import SignUpPage from './sign-up';
import { withNoAuth } from '../../hoc/withNoAuth';

function AuthPage(props) {
  const location = useLocation();
  return (
    <div className="row">
      <div className="col-12 mb-5">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link
              className={classNames('nav-link', {
                active: location.pathname.includes('/sign-in'),
              })}
              to="/auth/sign-in">
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={classNames('nav-link', {
                active: location.pathname.includes('/sign-up'),
              })}
              to="/auth/sign-up">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
      <div className="row">
        <Switch>
          <Route path="/auth/sign-in">
            <SignInPage />
          </Route>
          <Route path="/auth/sign-up">
            <SignUpPage />
          </Route>
          <Redirect to="/auth/sign-in" />
        </Switch>
      </div>
    </div>
  );
}

export default withNoAuth(AuthPage);
