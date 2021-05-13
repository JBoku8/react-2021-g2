import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setAuthUserAction } from '../../../redux/actions/auth-actions';
import { login } from '../../../services';

function SignInForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    const loggedIn = await login(data);
    localStorage.setItem('auth.token', JSON.stringify(loggedIn.token));
    dispatch(setAuthUserAction(loggedIn.token));
    history.replace('/profile');
  };

  return (
    <div className="col-6">
      <h2>Sign in form</h2>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            defaultValue="eve.holt@reqres.in"
            {...register('email', { required: true })}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            defaultValue="cityslicka"
            {...register('password', {
              required: true,
            })}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignInForm;
