import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import './app-header.styles.scss';
import { toggleCartAction } from '../../redux/cart/cart.actions';
import AppLocales from '../app-locales/app-locales.component';
import Logo from '../../assets/images/logo1.png';
import AppNavMenu from '../app-nav-menu/app-nav-menu.component';

interface INavLink {
  path: string;
  text: string;
}

const navigation: INavLink[] = [
  {
    text: 'links.shop',
    path: '/shop',
  },
];

const AppHeader: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const toggleCart = () => dispatch(toggleCartAction());

  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="logo">
          <img className="logo__img" src={Logo} alt="astorun" />
        </Link>

        <AppNavMenu>
          <>
            <nav className="nav">
              <ul className="nav__list">
                {navigation.map((link) => (
                  <li key={link.path} className="nav__item">
                    <NavLink
                      activeClassName="is-active"
                      className="nav__link"
                      to={link.path}
                    >
                      {t(link.text)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header__languages btn-group">
              <AppLocales />
            </div>
          </>
        </AppNavMenu>

        <Button
          color="primary"
          variant="outlined"
          onClick={toggleCart}
          classes={{ root: 'header__cart' }}
        >
          <ShoppingCartOutlinedIcon color="primary" />
        </Button>
      </div>
    </header>
  );
};

export default AppHeader;
