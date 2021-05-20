import { useEffect } from 'react';
import { Redirect } from 'react-router';

export const withAuthProtected = (Component) => {
  const WithAuthProtected = (props) => {
    useEffect(() => {
      console.log('access secured page');
    }, []);

    const token = JSON.parse(localStorage.getItem('auth.token'));
    if (!token) {
      return <Redirect to="/" />;
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />;
  };

  return WithAuthProtected;
};

export default withAuthProtected;
