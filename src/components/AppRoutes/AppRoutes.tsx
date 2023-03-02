import { Route, Routes } from 'react-router-dom';
import { FC } from 'react';
import { Home } from '../../pages/Home';
import { PhonesPage } from '../../pages/PhonesPage';
import { ProductDetailsPage } from '../../pages/ProductDetailsPage';
import { TabletsPage } from '../../pages/TabletsPage';
import { AccessoriesPage } from '../../pages/AccessoriesPage';
import { AuthPage } from '../../pages/AuthPage';
import { PrivateRoutes } from '../PrivateRoutes';
import { CartPage } from '../../pages/CartPage/CartPage';
import { UserProfile } from '../UserProfile';
import { NotFoundPage } from '../../pages/NotFoundPage';

type Props = {
  isAuth: boolean | undefined;
};

export const AppRoutes: FC<Props> = ({ isAuth }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/phones" element={<PhonesPage />} />
      <Route path="/phones/:productId" element={<ProductDetailsPage />} />
      <Route path="/tablets" element={<TabletsPage />} />
      <Route path="/tablets/:productId" element={<ProductDetailsPage />} />
      <Route path="/accessories" element={<AccessoriesPage />} />
      <Route
        path="/accessories/:productId"
        element={<ProductDetailsPage />}
      />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/registration" element={<AuthPage />} />
      <Route element={<PrivateRoutes isAuth={isAuth} />}>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<UserProfile />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
