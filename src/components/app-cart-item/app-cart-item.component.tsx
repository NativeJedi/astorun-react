import { CardMedia, Card } from '@material-ui/core';
import React from 'react';
import { ICartItem } from '../../redux/cart/cart.types';
import './app-cart-item.styles.scss';
import AppBtnClose from '../app-btn-close/app-btn-close.component';
import AppQuantityControl from '../app-quantity-control/app-quantity-control.component';

interface AppCartItemProps {
  item: ICartItem;
  onQuantityChange: (quantity: number) => void;
  onRemove: () => void;
}

const AppCartItem = ({
  item,
  onQuantityChange,
  onRemove,
}: AppCartItemProps): React.ReactElement => {
  const { imageUrl, name, price, quantity, selectedSize } = item;

  return (
    <Card classes={{ root: 'app-cart-item' }}>
      <CardMedia
        classes={{ root: 'app-cart-item__image' }}
        image={imageUrl}
        title={name}
      />
      <div className="app-cart-item__details">
        <h4 className="app-cart-item__title">{name}</h4>
        <div className="app-cart-item__details-row">
          <div className="app-cart-item__details-label">Size:</div>
          <div className="app-cart-item__details-value">
            {selectedSize.name}
          </div>
        </div>
        <div className="app-cart-item__details-row">
          <div className="app-cart-item__details-label">Price:</div>
          <div className="app-cart-item__details-value">{price}</div>
        </div>
        <div className="app-cart-item__details-row">
          <div className="app-cart-item__details-label">Quantity:</div>
          <div className="app-cart-item__details-value">
            <AppQuantityControl value={quantity} onChange={onQuantityChange} />
          </div>
        </div>
      </div>
      <div className="app-cart-item__remove">
        <AppBtnClose onClick={onRemove} />
      </div>
    </Card>
  );
};

export default AppCartItem;
