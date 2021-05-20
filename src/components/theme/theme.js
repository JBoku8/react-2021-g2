import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

// import css from './theme.module.css';

function Theme({ children }) {
  const { pathname } = useLocation();
  const [themeColor, setThemeColor] = useState('bg-light');

  useEffect(() => {
    switch (pathname) {
      case '/todos':
        // setThemeColor(css.todoHome);
        break;
      case '/counter':
        // setThemeColor(css.counter);
        break;
      default:
        setThemeColor('bg-light');
    }
  }, [pathname]);

  return (
    <div
      className={classNames(
        'container-fluid p-5 border theme-container',
        themeColor,
      )}
    >
      {children}
    </div>
  );
}

export default Theme;
