import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { withAuthProtected } from '../../hoc';
import { setAuthGuestAction } from '../../redux/actions/auth-actions';
import { AUTH_TOKEN } from '../../utils/constants';
import { HOME_PATH } from '../../utils/routePaths';

import css from './profile.module.css';

function Profile(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogOut = () => {
    localStorage.removeItem(AUTH_TOKEN);
    dispatch(setAuthGuestAction());
    history.replace(HOME_PATH);
  };

  const { title } = props;
  return (
    <div className={classNames('row mt-3 p-3', css.profile)}>
      <h2 className={classNames(css.title)}>{title}</h2>
      <button className="btn btn-primary" onClick={onLogOut} type="button">
        Log out
      </button>
    </div>
  );
}

Profile.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withAuthProtected(Profile);
