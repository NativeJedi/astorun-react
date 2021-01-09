import { Button } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartAction } from '../../redux/cart/cart.actions';
import { selectCartItemsQuantity } from '../../redux/cart/cart.selectors';
import './app-open-cart-btn.styles.scss';

const AppOpenCartBtn: React.FC = () => {
  const dispatch = useDispatch();
  const toggleCart = () => dispatch(toggleCartAction());
  const cartItemsQuantity = useSelector(selectCartItemsQuantity);

  return (
    <Button
      color="primary"
      variant="outlined"
      onClick={toggleCart}
      classes={{ root: 'app-open-cart-btn' }}
    >
      <ShoppingCartOutlinedIcon color="primary" />
      {Boolean(cartItemsQuantity) && (
        <div className="app-open-cart-btn__counter">{cartItemsQuantity}</div>
      )}
    </Button>
  );
};

export default AppOpenCartBtn;
