import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import AppCarousel from '../../components/app-carousel/app-carousel.component';
import AppSelect from '../../components/app-select/app-select.component';
import { getProducts } from '../../firebase/firebase.requests';
import { IProduct } from '../../redux/products/products.types';
import './product-details.styles.scss';

const ProductDetailsPage = (): React.ReactElement | null => {
  const [product, setProduct] = useState<IProduct | null>(null);

  const [selectedSize, setSize] = useState<string>('');

  useEffect(() => {
    getProducts().then(([firstProduct]) => {
      setProduct(firstProduct);
      setSize(firstProduct.sizes[0]?.name || '');
    });
  }, [setProduct]);

  if (!product) return null;

  const { imageUrl, title, price, sizes, images, description } = product;

  const sliderImages: string[] = [imageUrl, ...images.map(({ url }) => url)];
  const sizeNames: string[] = sizes.map(({ name }) => name);

  return (
    <div className="container">
      <h1 className="main-title">{title}</h1>

      <main className="product-details">
        <AppCarousel images={sliderImages} />

        <div className="product-details__info">
          <div className="product-details__toolbar">
            <span className="product-details__price">{price}</span>

            <div className="product-details__size-select">
              <AppSelect
                id="size-select"
                items={sizeNames}
                onChange={(size) => setSize(size)}
                value={selectedSize}
                label="Size"
              />
            </div>

            <Button
              classes={{ root: 'product-details__btn' }}
              variant="contained"
              color="primary"
            >
              Add to cart
            </Button>
          </div>

          <div className="product-details__description">{description}</div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailsPage;
