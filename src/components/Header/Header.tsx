import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Nav } from './Nav';
import './Header.scss';
import { Logo } from '../UI/Logo/Logo';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Search } from '../Search';

export const Header = () => {
  const cart = useAppSelector(state => state.cart);
  const { id: userId } = useAppSelector(state => state.user);
  const location = useLocation();

  const visibleCartItems = cart.filter(cartItem => cartItem.userId === userId);
  const pathname = location.pathname.replace('/', '');

  const pages = [
    { title: 'Home', link: '/' },
    { title: 'Phones', link: '/phones' },
    { title: 'Tablets', link: '/tablets' },
    { title: 'Accessories', link: '/accessories' },
  ];

  const availableToSearch = ['phones', 'tablets', 'accessories', 'favorites'];

  return (
    <header className="header">
      <div className="header__nav">
        <Logo />
        <Nav pages={pages} />
      </div>
      <div className="header__icons">
        {availableToSearch.includes(pathname) && (
          <Search currentPage={pathname} />
        )}
        <NavLink
          to="/cart"
          className={
            ({ isActive }) => classNames(
              'header__cart',
              { 'header__cart--active': isActive },
            )
          }
        >
          { visibleCartItems.length !== 0 && (
            <span className="header__cart-quantity">
              {visibleCartItems.length}
            </span>
          )}
        </NavLink>
        <NavLink
          to="/profile"
          className={
            ({ isActive }) => classNames(
              'header__profile',
              { 'header__profile--active': isActive },
            )
          }
        />
      </div>
    </header>
  );
};
