import { IError } from '../../types/error.type';

export interface IProductImage {
  url: string;
}

export interface ISize {
  name: string;
  count: number;
}

export type TProductImages = IProductImage[];

export interface IProduct {
  id: string;
  price: number;
  title: string;
  imageUrl: string;
  sizes: ISize[];
  images: TProductImages;
  description: string;
}

export type TProducts = IProduct[];

export interface IProductsState {
  products: TProducts;
  page: number;
  pages: number;
  total: number;
  isLoading: boolean;
  error: IError | null;
}

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export interface FetchProductsStartAction {
  type: typeof FETCH_PRODUCTS_START;
}

export interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: TProducts;
}

export interface FetchProductsFailureAction {
  type: typeof FETCH_PRODUCTS_FAILURE;
  payload: IError;
}

export type ProductsActionTypes =
  | FetchProductsStartAction
  | FetchProductsSuccessAction
  | FetchProductsFailureAction;
