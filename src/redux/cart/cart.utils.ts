import { ICartItems, IItemToAdd } from './cart.types';

// Every cart item with different size is different cart item
const getCartItemId = ({ id, size }: IItemToAdd): string => `${id}-${size}`;

const increaseItemQuantity = (
  itemId: string,
  cartItems: ICartItems
): ICartItems => {
  const cartItem = cartItems[itemId];

  return {
    ...cartItems,
    [itemId]: {
      ...cartItem,
      quantity: cartItem.quantity + 1,
    },
  };
};

export const addItemToCart = (
  itemToAdd: IItemToAdd,
  cartItems: ICartItems
): ICartItems => {
  const cartItemId = getCartItemId(itemToAdd);
  const cartItem = cartItems[cartItemId];

  if (!cartItem) {
    return {
      ...cartItems,
      [cartItemId]: {
        ...itemToAdd,
        quantity: 1,
      },
    };
  }

  return increaseItemQuantity(cartItemId, cartItems);
};

export const removeItemFromCart = (
  cartItemId: string,
  cartItems: ICartItems
): ICartItems => {
  const cartItemsCopy = { ...cartItems };

  delete cartItemsCopy[cartItemId];

  return cartItemsCopy;
};

export const changeItemQuantity = (
  cartItemId: string,
  changedQuantity: number,
  cartItems: ICartItems
): ICartItems => {
  const cartItem = cartItems[cartItemId];
  const { quantity } = cartItem;
  console.log('cartItem, changedQuantity:', cartItem, changedQuantity);
  const isDecrease = cartItem.quantity > changedQuantity;

  if (isDecrease && quantity === 1) {
    return cartItems;
  }

  return {
    ...cartItems,
    [cartItemId]: {
      ...cartItem,
      quantity: changedQuantity,
    },
  };
};
