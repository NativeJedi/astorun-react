import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { getProductById } from '../../api/requests';
import AppCarousel from '../../components/app-carousel/app-carousel.component';
import AppSelect from '../../components/app-select/app-select.component';
import { ERROR_NOTIFICATION } from '../../constants/notifications.constants';
import { addItemAction } from '../../redux/cart/cart.actions';
import { addNotification } from '../../redux/notifications/notifications.actions';
import {
  IProductDetails,
  IProductSize,
} from '../../redux/products/products.types';
import './product-details.styles.scss';
import { ShopRoute } from '../../routes/index';

const ProductDetailsPage = (): React.ReactElement | null => {
  const [product, setProduct] = useState<IProductDetails | null>(null);
  const [selectedSize, setSize] = useState<IProductSize | null>(null);
  const { params } = useRouteMatch<{ productId: string }>();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const history = useHistory();

  useEffect(() => {
    getProductById(params.productId)
      .then(({ data }) => {
        setProduct(data);
        setSize(data.sizes?.[0] || null);
      })
      .catch(({ message }) => {
        dispatch(
          addNotification({
            type: ERROR_NOTIFICATION,
            message,
          })
        );

        history.replace(ShopRoute.getPath());
      });
  }, [params, dispatch, history]);

  if (!product) return null;

  const { id, name, price, description, images, sizes } = product;

  const sliderImages: string[] = images.map(({ url }) => url);
  const sizeNames: string[] = sizes.map(({ name: productName }) => productName);

  const addProductToCart = (): void => {
    if (!selectedSize) return;

    dispatch(
      addItemAction({
        id,
        selectedSize,
        name,
        imageUrl: images.find(({ isMain }) => isMain)!.url,
        price: Number(price),
      })
    );
  };

  const handleSizeSelect = (selectedSizeName: string) => {
    const changedSize = sizes.find(
      ({ name: sizeName }) => selectedSizeName === sizeName
    );

    setSize(changedSize!);
  };

  return (
    <div className="container">
      <h1 className="main-title">{name}</h1>

      <main className="product-details">
        <AppCarousel images={sliderImages} />

        <div className="product-details__info">
          <div className="product-details__toolbar">
            <span className="product-details__price">{price}</span>

            <div className="product-details__size-select">
              <AppSelect
                id="size-select"
                items={sizeNames}
                onChange={handleSizeSelect}
                value={selectedSize?.name || ''}
                label={t('label.size')}
              />
            </div>

            <Button
              classes={{ root: 'product-details__btn' }}
              variant="contained"
              color="primary"
              onClick={addProductToCart}
            >
              {t('actions.add_to_cart')}
            </Button>
          </div>

          <div className="product-details__description">{description}</div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailsPage;
