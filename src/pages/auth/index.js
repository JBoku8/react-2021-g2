import classNames from 'classnames';
import { Redirect, Route, Switch, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import SignInPage from './sign-in';
import SignUpPage from './sign-up';
import { withNoAuth } from '../../hoc';

import { SIGN_IN_PATH, SIGN_UP_PATH } from '../../utils/routePaths';

function AuthPage() {
  const location = useLocation();
  return (
    <div className="row">
      <div className="col-12 mb-5">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link
              className={classNames('nav-link', {
                active: location.pathname.includes(SIGN_IN_PATH),
              })}
              to={SIGN_IN_PATH}>
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={classNames('nav-link', {
                active: location.pathname.includes(SIGN_UP_PATH),
              })}
              to={SIGN_UP_PATH}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
      <div className="row">
        <Switch>
          <Route path={SIGN_IN_PATH}>
            <SignInPage />
          </Route>
          <Route path={SIGN_UP_PATH}>
            <SignUpPage />
          </Route>
          <Redirect to={SIGN_IN_PATH} />
        </Switch>
      </div>
    </div>
  );
}

export default withNoAuth(AuthPage);
