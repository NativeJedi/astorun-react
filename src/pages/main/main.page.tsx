import { WithT } from 'i18next';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './main.styles.scss';
import AppLocales from '../../components/app-locales/app-locales.component';

const MainPage = ({ t }: WithT): React.ReactElement => (
  <section className="main-wrapper">
    <div className="container">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Astorun" />
      </Link>

      <nav className="main-nav">
        <Link to="/shop" className="main-nav__link">
          {t('links.shop')}
        </Link>

        <Link to="/news" className="main-nav__link">
          {t('links.news')}
        </Link>

        <Link to="/collection" className="main-nav__link">
          {t('links.collection')}
        </Link>

        <Link to="/contacts" className="main-nav__link">
          {t('links.contacts')}
        </Link>
      </nav>

      <div className="main-languages">
        <AppLocales />
      </div>
    </div>
  </section>
);

export default withTranslation()(MainPage);
