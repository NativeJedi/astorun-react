export interface IStorageCartItem {
  id: string;
  sizeId: string;
  quantity: number;
}

export type TStoredCartItems = IStorageCartItem[];
