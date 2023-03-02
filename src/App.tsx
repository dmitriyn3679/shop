import './App.scss';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AppRoutes } from './components/AppRoutes/AppRoutes';
import { actions as userActions } from './features/user';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useAppSelector } from './hooks/useAppSelector';
import { UnauthorizedMessage } from './components/UI/UnauthorizedMessage';
import { PageLoader } from './components/UI/Loaders/PageLoader';

const App = () => {
  const dispatch = useAppDispatch();
  const [isAuth, setIsAuth] = useState<boolean>();
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const alert = useAppSelector(state => state.alert);

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setIsAuth(true);
        setIsLoading(false);

        dispatch(userActions.setUser({
          id: authUser.uid,
          email: authUser.email,
          name: authUser.displayName,
        }));

        return;
      }

      setIsAuth(false);
      setIsLoading(false);
    });
  }, [auth]);

  return (
    <div className="App page">
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          <Header />
          { alert.unauthorized && <UnauthorizedMessage /> }
          <div className="content-wrapper">
            <AppRoutes isAuth={isAuth} />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
