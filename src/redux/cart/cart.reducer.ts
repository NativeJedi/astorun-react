import {
  ADD_ITEM,
  CartActionTypes,
  CHANGE_ITEM_QUANTITY,
  CLEAR_CART,
  ICartState,
  LOAD_CART_FAILURE,
  LOAD_CART_START,
  LOAD_CART_SUCCESS,
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
  isLoading: false,
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

    case LOAD_CART_START:
      return {
        ...state,
        isLoading: true,
      };

    case LOAD_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };

    case LOAD_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
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

    case CLEAR_CART:
      return {
        ...INITIAL_STATE,
      };

    default:
      return state;
  }
};

export default cartReducer;
