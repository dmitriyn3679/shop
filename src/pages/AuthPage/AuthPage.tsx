import { Navigate } from 'react-router-dom';
import { Auth } from '../../components/Auth';
import { useAppSelector } from '../../hooks/useAppSelector';

export const AuthPage = () => {
  const { id: isAuth } = useAppSelector(state => state.user);

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Auth />
  );
};
