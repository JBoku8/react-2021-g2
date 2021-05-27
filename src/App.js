import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navigation from './components/navigation';
import Theme from './components/theme';
import Routes from './Routes';

import './App.css';
import { autoLoginAction } from './redux/actions/middleware-actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(autoLoginAction());
  }, [dispatch]);

  return (
    <div className="container">
      <Navigation />
      <hr />
      <Theme>
        <Routes />
      </Theme>
    </div>
  );
}

export default App;
