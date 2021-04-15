import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withAuthProtected } from '../../hoc/withAuthProtected';

import css from './profile.module.css';

function Profile(props) {
  return (
    <div className={classNames('row mt-3 p-3', css.profile)}>
      <h2 className={classNames(css.title)}>{props.title}</h2>
    </div>
  );
}

Profile.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withAuthProtected(Profile);
