import { IError } from '../../types/error.types';
import { IProductSize } from '../products/products.types';

export const TOGGLE_CART = 'TOGGLE_CART';
export const ADD_ITEM = 'ADD_ITEM';
export const CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const CLEAR_CART = 'CLEAR_CART';
export const LOAD_CART_START = 'LOAD_CART_START';
export const LOAD_CART_SUCCESS = 'LOAD_CART_SUCCESS';
export const LOAD_CART_FAILURE = 'LOAD_CART_FAILURE';

export type IItemToAdd = {
  id: string;
  name: string;
  imageUrl: string;
  selectedSize: IProductSize;
  price: number;
};

export interface ICartItem extends IItemToAdd {
  quantity: number;
}

export interface ICartItems {
  [key: string]: ICartItem;
}

export type ICartState = {
  isOpened: boolean;
  items: ICartItems;
  isLoading: boolean;
};

export interface IToggleCartAction {
  type: typeof TOGGLE_CART;
  payload?: null;
}

export interface IAddItemAction {
  type: typeof ADD_ITEM;
  payload: IItemToAdd;
}

export interface IChangeItemQuantityPayload {
  id: string;
  quantity: number;
}

export type TCartItemsEntries = Array<[string, ICartItem]>;

export interface IChangeItemQuantityAction {
  type: typeof CHANGE_ITEM_QUANTITY;
  payload: IChangeItemQuantityPayload;
}

export interface IRemoveCartItemAction {
  type: typeof REMOVE_CART_ITEM;
  payload: string;
}

export interface IClearCartAction {
  type: typeof CLEAR_CART;
}

export interface ILoadCartStartAction {
  type: typeof LOAD_CART_START;
}

export interface ILoadCartSuccessAction {
  type: typeof LOAD_CART_SUCCESS;
  payload: ICartItems;
}

export interface ILoadCartFailureAction {
  type: typeof LOAD_CART_FAILURE;
  payload: IError;
}

export type CartActionTypes =
  | IToggleCartAction
  | IAddItemAction
  | IRemoveCartItemAction
  | IChangeItemQuantityAction
  | IClearCartAction
  | ILoadCartFailureAction
  | ILoadCartSuccessAction
  | ILoadCartStartAction;
