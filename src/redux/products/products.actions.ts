import { IGetProductsParams } from '../../api/requests.types';
import { IError } from '../../types/error.types';
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FetchProductsFailureAction,
  FetchProductsStartAction,
  FetchProductsSuccessAction,
  FetchProductsSuccessPayload,
} from './products.types';

export const fetchProductsStart = (
  params: IGetProductsParams
): FetchProductsStartAction => ({
  type: FETCH_PRODUCTS_START,
  payload: params,
});

export const fetchProductsSuccess = (
  payload: FetchProductsSuccessPayload
): FetchProductsSuccessAction => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload,
});

export const fetchProductsFailure = (
  error: IError
): FetchProductsFailureAction => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});
