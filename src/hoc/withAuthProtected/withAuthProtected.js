import { useEffect } from 'react';
import { Redirect } from 'react-router';
import { AUTH_TOKEN } from '../../utils/constants';
import { HOME_PATH } from '../../utils/routePaths';

export const withAuthProtected = (Component) => {
  const WithAuthProtected = (props) => {
    useEffect(() => {
      console.log('access secured page');
    }, []);

    const token = JSON.parse(localStorage.getItem(AUTH_TOKEN));
    if (!token) {
      return <Redirect to={HOME_PATH} />;
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />;
  };

  return WithAuthProtected;
};

export default withAuthProtected;
