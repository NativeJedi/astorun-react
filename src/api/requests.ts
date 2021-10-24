/* eslint-disable camelcase */
import {
  TResponse,
  IGetProductsParams,
  IPaginatedData,
} from './requests.types';
import { TCollections } from '../redux/collections/collections.types';
import { IProductDetails, TProducts } from '../redux/products/products.types';
import { IOrder } from '../types/order.types';
import api from './api';

export type TGetCollectionResponse = TResponse<TCollections>;

export const getCollections = (): TGetCollectionResponse =>
  api.get('/collection/collection');

export type TProductsData = IPaginatedData<TProducts>;

export const getProducts = ({
  page,
  pageSize,
  collection,
}: IGetProductsParams): TResponse<TProductsData> =>
  api.get('/product/product/', {
    params: { page, collection, page_size: pageSize },
  });

export const getProductById = (id: string): TResponse<IProductDetails> =>
  api.get(`/product/product/${id}`);

export const createOrder = ({
  firstName: first_name,
  lastName: last_name,
  delAddress: del_address,
  delCity: del_city,
  email,
  items,
  phone,
}: IOrder): TResponse<unknown> =>
  api.post('/order/order/', {
    first_name,
    last_name,
    del_address,
    del_city,
    email,
    items,
    phone,
  });

export const getProductsByIds = (ids: string[]): unknown =>
  api.post('/product/product/by-ids/', { ids });
