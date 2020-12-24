import React, { ForwardedRef } from 'react';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { TransitionProps } from '@material-ui/core/transitions';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Slide,
  Button,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartAction } from '../../redux/cart/cart.actions';
import {
  selectCartIsOpened,
  selectCartItems,
} from '../../redux/cart/cart.selectors';
import './app-cart.styles.scss';
import AppCartItems from '../app-cart-items/app-cart-items.component';
import { CheckoutRoute } from '../../routes/index';
import AppCartPlaceholder from '../app-cart-placeholder/app-cart-placeholder.component';

const SlideTransition = (
  props: TransitionProps,
  ref: ForwardedRef<HTMLDivElement>
): React.ReactElement => <Slide direction="left" ref={ref} {...props} />;

const Transition = React.forwardRef<HTMLDivElement, TransitionProps>(
  SlideTransition
);

const CHECKOUT_ROUTE = CheckoutRoute.getPath();

const AppCart: React.FC = () => {
  const dispatch = useDispatch();
  const isOpened: boolean = useSelector(selectCartIsOpened);
  const cartItemsEntries = useSelector(selectCartItems);
  const handleClose = () => dispatch(toggleCartAction());
  const history = useHistory();

  const handleCheckoutRedirect = (): void => {
    history.push(CHECKOUT_ROUTE);
    handleClose();
  };

  return (
    <Dialog
      open={isOpened}
      keepMounted
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-labelledby="Your cart"
      aria-describedby="The goods in your cart"
      classes={{
        root: 'app-cart',
        scrollPaper: 'app-cart-overlay',
        paperScrollPaper: 'app-cart-paper',
      }}
    >
      <DialogTitle
        classes={{ root: 'app-cart-title' }}
        id="alert-dialog-slide-title"
      >
        The goods in your cart
      </DialogTitle>
      <DialogContent classes={{ root: 'app-cart-content' }}>
        <AppCartItems cartItems={cartItemsEntries} />

        {cartItemsEntries.length ? (
          <footer className="app-cart-footer">
            <Button
              classes={{ root: 'app-cart-checkout-btn' }}
              variant="contained"
              size="large"
              color="primary"
              onClick={handleCheckoutRedirect}
            >
              Go to checkout
            </Button>
          </footer>
        ) : (
          <AppCartPlaceholder onRedirect={handleClose} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AppCart;
