import React from 'react';
import AppCart from '../../components/app-cart/app-cart.component';
import AppFooter from '../../components/app-footer/app-footer.component';
import AppHeader from '../../components/app-header/app-header.component';
import './main-layout.styles.scss';

const MainLayout: React.FC = ({ children }) => (
  <div className="app-main-wrapper">
    <AppHeader />
    <section className="section">{children}</section>
    <AppFooter />
    <AppCart />
  </div>
);

export default MainLayout;
