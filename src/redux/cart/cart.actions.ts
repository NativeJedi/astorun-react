import {
  ADD_ITEM,
  CHANGE_ITEM_QUANTITY,
  IAddItemAction,
  IChangeItemQuantityAction,
  IChangeItemQuantityPayload,
  IItemToAdd,
  IRemoveCartItemAction,
  IToggleCartAction,
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
