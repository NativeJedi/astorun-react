import React, { ForwardedRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
import { CART_ITEMS_STORAGE_KEY } from '../../constants/cart.constants';
import {
  loadCartStartAction,
  toggleCartAction,
} from '../../redux/cart/cart.actions';
import {
  selectCartIsOpened,
  selectCartItems,
} from '../../redux/cart/cart.selectors';
import './app-cart.styles.scss';
import { TCartItemsEntries } from '../../redux/cart/cart.types';
import LocalStorageService from '../../services/local-storage.service';
import AppBtnClose from '../app-btn-close/app-btn-close.component';
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

const saveCartItems = (cartItemsEntries: TCartItemsEntries): void => {
  const cartItems = cartItemsEntries.map(([sizeId, { id, quantity }]) => ({
    sizeId,
    id,
    quantity,
  }));

  LocalStorageService.setItem(CART_ITEMS_STORAGE_KEY, cartItems);
};

const AppCart: React.FC = () => {
  const dispatch = useDispatch();
  const isOpened: boolean = useSelector(selectCartIsOpened);
  const cartItemsEntries = useSelector(selectCartItems);
  const handleClose = () => dispatch(toggleCartAction());
  const history = useHistory();
  const { t } = useTranslation();

  const handleCheckoutRedirect = (): void => {
    history.push(CHECKOUT_ROUTE);
    handleClose();
  };

  useEffect(() => {
    dispatch(loadCartStartAction());
  }, [dispatch]);

  useEffect(() => {
    saveCartItems(cartItemsEntries);
  }, [cartItemsEntries]);

  return (
    <Dialog
      open={isOpened}
      keepMounted
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-labelledby={t('page.cart.title')}
      aria-describedby={t('page.cart.title')}
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
        <span className="app-cart-title__text">{t('page.cart.title')}</span>
        <AppBtnClose className="app-cart__close" onClick={handleClose} />
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
              {t('actions.go_to_checkout')}
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
