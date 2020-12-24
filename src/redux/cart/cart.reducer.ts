import {
  ADD_ITEM,
  CartActionTypes,
  CHANGE_ITEM_QUANTITY,
  ICartState,
  REMOVE_CART_ITEM,
  TOGGLE_CART,
} from './cart.types';
import {
  addItemToCart,
  changeItemQuantity,
  removeItemFromCart,
} from './cart.utils';

const INITIAL_STATE: ICartState = {
  isOpened: false,
  items: {},
};

const cartReducer = (
  state = INITIAL_STATE,
  action: CartActionTypes
): ICartState => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        isOpened: !state.isOpened,
      };

    case ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(action.payload, state.items),
      };

    case CHANGE_ITEM_QUANTITY:
      return {
        ...state,
        items: changeItemQuantity(
          action.payload.id,
          action.payload.quantity,
          state.items
        ),
      };

    case REMOVE_CART_ITEM:
      return {
        ...state,
        items: removeItemFromCart(action.payload, state.items),
      };

    default:
      return state;
  }
};

export default cartReducer;
