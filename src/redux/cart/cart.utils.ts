import { TStoredCartItems } from '../../types/storage.types';
import { IProductDetails } from '../products/products.types';
import { ICartItems, IItemToAdd } from './cart.types';

// Every cart item with different size is different cart item
const getCartItemId = ({ selectedSize }: IItemToAdd): string => selectedSize.id;

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

export const formCartItems = (
  storedCartItems: TStoredCartItems,
  products: IProductDetails[]
): ICartItems => {
  return storedCartItems.reduce(
    (cartItemsStore, { sizeId, id: productId, quantity }) => {
      const product = products.find(({ id }) => productId === id);

      if (!product) {
        return cartItemsStore;
      }

      const selectedSize = product.sizes.find(({ id }) => id === sizeId);

      if (!selectedSize) {
        return cartItemsStore;
      }

      return {
        [sizeId]: {
          ...product,
          selectedSize,
          quantity,
        },
      };
    },
    {}
  );
};
