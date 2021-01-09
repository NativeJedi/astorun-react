import { IError } from '../../types/error.types';
import {
  ADD_ITEM,
  CHANGE_ITEM_QUANTITY,
  CLEAR_CART,
  IAddItemAction,
  ICartItems,
  IChangeItemQuantityAction,
  IChangeItemQuantityPayload,
  IClearCartAction,
  IItemToAdd,
  ILoadCartFailureAction,
  ILoadCartStartAction,
  ILoadCartSuccessAction,
  IRemoveCartItemAction,
  IToggleCartAction,
  LOAD_CART_FAILURE,
  LOAD_CART_START,
  LOAD_CART_SUCCESS,
  REMOVE_CART_ITEM,
  TOGGLE_CART,
} from './cart.types';

export const toggleCartAction = (): IToggleCartAction => ({
  type: TOGGLE_CART,
});

export const addItemAction = (itemToAdd: IItemToAdd): IAddItemAction => ({
  type: ADD_ITEM,
  payload: itemToAdd,
});

export const changeItemQuantityAction = (
  payload: IChangeItemQuantityPayload
): IChangeItemQuantityAction => ({
  type: CHANGE_ITEM_QUANTITY,
  payload,
});

export const removeCartItemAction = (
  cartItemId: string
): IRemoveCartItemAction => ({
  type: REMOVE_CART_ITEM,
  payload: cartItemId,
});

export const clearCartAction = (): IClearCartAction => ({
  type: CLEAR_CART,
});

export const loadCartStartAction = (): ILoadCartStartAction => ({
  type: LOAD_CART_START,
});

export const loadCartSuccessAction = (
  cartItems: ICartItems
): ILoadCartSuccessAction => ({
  type: LOAD_CART_SUCCESS,
  payload: cartItems,
});

export const loadCartFailureAction = (
  error: IError
): ILoadCartFailureAction => ({
  type: LOAD_CART_FAILURE,
  payload: error,
});
