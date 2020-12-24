export const TOGGLE_CART = 'TOGGLE_CART';
export const ADD_ITEM = 'ADD_ITEM';
export const CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

export type IItemToAdd = {
  id: string;
  title: string;
  imageUrl: string;
  size: string;
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

export type CartActionTypes =
  | IToggleCartAction
  | IAddItemAction
  | IRemoveCartItemAction
  | IChangeItemQuantityAction;
