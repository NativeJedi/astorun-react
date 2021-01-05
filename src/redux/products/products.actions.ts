import { IError } from '../../types/error.types';
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FetchProductsFailureAction,
  FetchProductsStartAction,
  FetchProductsSuccessAction,
  TProducts,
} from './products.types';

export const fetchProductsStart = (): FetchProductsStartAction => ({
  type: FETCH_PRODUCTS_START,
});

export const fetchProductsSuccess = (
  products: TProducts
): FetchProductsSuccessAction => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (
  error: IError
): FetchProductsFailureAction => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});
