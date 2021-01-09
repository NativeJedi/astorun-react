import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import AppEmptyProducts from '../../components/app-empty-products/app-empty-products.component';
import AppPagination from '../../components/app-pagination/app-pagination.component';
import AppProductCard from '../../components/app-product-card/app-product-card.component';
import withLoader, { IWithLoaderProps } from '../../HOCS/with-loader.hoc';
import { fetchProductsStart } from '../../redux/products/products.actions';
import {
  selectProducts,
  selectProductsLoading,
} from '../../redux/products/products.selectors';
import './collection-overview.styles.scss';

const CollectionOverviewPage = ({
  setLoading,
}: IWithLoaderProps): React.ReactElement => {
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectProductsLoading);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const {
    params: { collection },
  } = useRouteMatch<{ collection: string }>();

  useEffect(() => {
    dispatch(fetchProductsStart({ page: 1, collection }));
  }, [dispatch, collection]);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  return (
    <div className="container products-container">
      <h1 className="main-title">{t('page.products.title')}</h1>

      <div>
        {products.map((product) => (
          <AppProductCard key={product.id} product={product} />
        ))}
        {!products.length && <AppEmptyProducts />}
      </div>

      <AppPagination count={1} classes={{ root: 'products-pagination' }} />
    </div>
  );
};

export default withLoader(CollectionOverviewPage);
