import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Link } from 'react-router-dom';
import './app-header.styles.scss';
import AppLocales from '../app-locales/app-locales.component';
import Logo from '../../assets/images/logo1.png';
import AppNavMenu from '../app-nav-menu/app-nav-menu.component';
import AppOpenCartBtn from '../app-open-cart-btn/app-open-cart-btn.component';

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

        <AppOpenCartBtn />
      </div>
    </header>
  );
};

export default AppHeader;
