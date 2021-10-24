import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './shop.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import AppEmptyProducts from '../../components/app-empty-products/app-empty-products.component';
import { fetchCollectionsStart } from '../../redux/collections/collections.actions';
import AppCollectionCard from '../../components/app-collection-card/app-collection-card.component';
import {
  selectCollections,
  selectCollectionsLoading,
} from '../../redux/collections/collections.selectors';
import { TCollections } from '../../redux/collections/collections.types';
import withLoader, { IWithLoaderProps } from '../../HOCS/with-loader.hoc';

const ShopPage = ({ setLoading }: IWithLoaderProps): React.ReactElement => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const collections: TCollections = useSelector(selectCollections);
  const isCollectionsLoading = useSelector(selectCollectionsLoading);

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  useEffect(() => {
    setLoading(isCollectionsLoading);
  }, [isCollectionsLoading, setLoading]);

  return (
    <div className="container">
      <h1 className="main-title">{t('page.shop.title')}</h1>
      <div className="shop-grid">
        {collections.map((item) => (
          <AppCollectionCard key={item.name} item={item} />
        ))}
      </div>
      {!collections.length && <AppEmptyProducts />}
    </div>
  );
};

export default withLoader<IWithLoaderProps>(ShopPage);
