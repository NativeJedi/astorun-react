import { IError } from '../../types/error.types';

interface IProductGender {
  id: string;
  name: string;
}

export interface IProductImage {
  url: string;
  isMain: boolean;
}

interface IProductLabel {
  id: string;
  name: string;
}

interface IProductSeason {
  id: string;
  name: string;
}

type TProductImages = IProductImage[];

export interface IProductSize {
  id: string;
  count: number;
  name: string;
}

export type TProductSizes = IProductSize[];

export interface IProduct {
  collection: string;
  id: string;
  gender: IProductGender;
  image: IProductImage;
  inStock: boolean;
  label: IProductLabel;
  name: string;
  oldPrice: string;
  price: string;
  season: IProductSeason;
}

export interface IProductDetails extends IProduct {
  description: string;
  images: TProductImages;
  sizes: TProductSizes;
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
