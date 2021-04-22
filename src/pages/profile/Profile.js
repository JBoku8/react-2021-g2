import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { withAuthProtected } from '../../hoc/withAuthProtected';

import css from './profile.module.css';

function Profile(props) {
  const history = useHistory();

  const onLogOut = () => {
    localStorage.removeItem('auth.token');
    history.replace('/');
  };

  return (
    <div className={classNames('row mt-3 p-3', css.profile)}>
      <h2 className={classNames(css.title)}>{props.title}</h2>
      <button className="btn btn-primary" onClick={onLogOut}>
        Log out
      </button>
    </div>
  );
}

Profile.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withAuthProtected(Profile);
