import React from 'react';
import { useTranslation } from 'react-i18next';
import EmptyCart from '../../assets/images/empty-products.svg';
import './app-empty-products.styles.scss';

const AppEmptyProducts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="app-empty-products">
      <img
        src={EmptyCart}
        alt="empty products"
        className="app-empty-products__image"
      />
      <p className="app-empty-products__text">
        {t('page.products.no_products')}
      </p>
    </div>
  );
};

export default AppEmptyProducts;
