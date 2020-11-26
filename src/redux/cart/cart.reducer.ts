import { Reducer } from 'redux';
import { TOGGLE_CART, ICartState, CartActionTypes } from './cart.types';

const INITIAL_STATE: ICartState = {
  isOpened: false,
};

const cartReducer: Reducer<ICartState, CartActionTypes> = (
  state = INITIAL_STATE,
  { type }
) => {
  switch (type) {
    case TOGGLE_CART:
      return {
        ...state,
        isOpened: !state.isOpened,
      };

    default:
      return state;
  }
};

export default cartReducer;
