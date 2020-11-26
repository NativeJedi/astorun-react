import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './shop.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/collections/collections.actions';
import AppCollectionCard from '../../components/app-collection-card/app-collection-card.component';
import { selectCollections } from '../../redux/collections/collections.selectors';
import { TCollections } from '../../redux/collections/collections.types';

const ShopPage: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const collections: TCollections = useSelector(selectCollections);

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="main-title">{t('shop.title')}</h1>
      <div className="shop-grid">
        {collections.map((item) => (
          <AppCollectionCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
