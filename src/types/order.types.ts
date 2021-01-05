export interface IOrderSize {
  size: string;
  count: number;
}

export type TOrderItems = IOrderSize[];

export interface IOrder {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  delAddress: string;
  delCity: string;
  items: TOrderItems;
}
