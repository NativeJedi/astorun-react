import React from 'react';
import { IProduct } from '../../redux/products/products.types';

interface ICardProps {
  product: IProduct;
}

const AppProductCard = ({ product }: ICardProps): React.ReactElement => {
  const { title, imageUrl, price } = product;

  return (
    <div className="app-product-card">
      <div
        className="app-product-card__background"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="app-product-card__footer">
        <span>{title}</span>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default AppProductCard;
