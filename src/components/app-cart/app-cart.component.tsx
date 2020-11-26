import React, { ForwardedRef } from 'react';
// eslint-disable-next-line
import { TransitionProps } from '@material-ui/core/transitions';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Slide,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartAction } from '../../redux/cart/cart.actions';
import { selectCartIsOpened } from '../../redux/cart/cart.selectors';
import './app-cart.styles.scss';

const SlideTransition = (
  props: TransitionProps,
  ref: ForwardedRef<HTMLDivElement>
): React.ReactElement => <Slide direction="left" ref={ref} {...props} />;

const Transition = React.forwardRef<HTMLDivElement, TransitionProps>(
  SlideTransition
);

const AppCart: React.FC = () => {
  const dispatch = useDispatch();
  const isOpened: boolean = useSelector(selectCartIsOpened);
  const handleClose = () => dispatch(toggleCartAction());

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
      <DialogContent>
        <DialogContentText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default AppCart;
