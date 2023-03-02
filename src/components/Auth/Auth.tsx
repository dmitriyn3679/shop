import './Auth.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { FormEvent, useState } from 'react';
import { FirebaseError } from '@firebase/util';
import googleIcon from '../../img/icons/google_icon.svg';
import { app } from '../../firebase';
import { AuthErrorMessage } from '../UI/AuthErrorMessage';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { actions as userActions } from '../../features/user';
import { getErrorMessages } from '../../helpers/getErrorMessages';

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState<boolean>();
  const [errorMessage, setErrorMessage] = useState('');

  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleGoogleAuth = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const { user } = await signInWithPopup(auth, provider);

      dispatch(userActions.setUser({
        id: user.uid,
        email: user.email,
        name: user.displayName,
      }));

      navigate(state.from);
    } catch (error) {
      if (error instanceof FirebaseError) {
        setIsError(true);
      }
    }
  };

  const handleAuth = async (event: FormEvent) => {
    event.preventDefault();
    const auth = getAuth(app);

    const action = pathname === '/login'
      ? signInWithEmailAndPassword
      : createUserWithEmailAndPassword;

    try {
      const { user } = await action(auth, email, password);

      dispatch(userActions.setUser({
        id: user.uid,
        email: user.email,
        name: user.displayName,
      }));
      navigate(state ? state.from : '/');
    } catch (error) {
      if (error instanceof FirebaseError) {
        setErrorMessage(getErrorMessages(error.code));
        setIsError(true);
      }
    }
  };

  return (
    <div className="auth">
      {isError && <AuthErrorMessage message={errorMessage} />}
      <h3 className="auth__header">
        {pathname === '/login' ? 'Login to your account' : 'Registration'}
      </h3>
      <form action="" className="auth__form" onSubmit={handleAuth}>
        <div className="auth__form-fields">
          <label htmlFor="email" className="auth__form-label">
            Email
            <input
              type="email"
              className="auth__form-input"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password" className="auth__form-label">
            Password
            <input
              type="password"
              className="auth__form-input"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button
          type="submit"
          className="auth__form-login"
        >
          {pathname === '/login' ? 'Login now' : 'Register'}
        </button>
        <button
          type="button"
          className="auth__form-google-login"
          onClick={handleGoogleAuth}
        >
          <img src={googleIcon} alt="google" className="auth__google-icon" />
          Or sign-in with google
        </button>
      </form>
      <span className="auth__register">
        {pathname === '/login'
          ? 'Dont have an account?'
          : 'Already have an account?'}
        <Link
          to={pathname === '/login' ? '/registration' : '/login'}
          className="auth__register-link"
        >
          {pathname === '/login' ? 'Register' : 'Login'}
        </Link>
      </span>
    </div>
  );
};
