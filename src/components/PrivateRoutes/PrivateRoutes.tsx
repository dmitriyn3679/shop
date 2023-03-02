import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { FC } from 'react';

type Props = {
  isAuth: boolean | undefined;
};

export const PrivateRoutes: FC<Props> = ({ isAuth }) => {
  const location = useLocation();

  return isAuth
    ? <Outlet />
    : <Navigate to="/login" replace state={{ from: location }} />;
};
