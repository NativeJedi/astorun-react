import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import AppProductCard from '../../components/app-product-card/app-product-card.component';
import { fetchProductsStart } from '../../redux/products/products.actions';
import { selectProducts } from '../../redux/products/products.selectors';

const CollectionOverviewPage: React.FC = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="main-title">{t('page.products.title')}</h1>

      <div>
        {products.map((product) => (
          <AppProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CollectionOverviewPage;
