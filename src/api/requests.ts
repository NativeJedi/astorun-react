/* eslint-disable camelcase */
import { AxiosResponse } from 'axios';
import { TCollections } from '../redux/collections/collections.types';
import { IProductDetails, TProducts } from '../redux/products/products.types';
import { IOrder } from '../types/order.types';
import api from './api';

type TResponse<D> = Promise<AxiosResponse<D>>;

export const getCollections = (): TResponse<TCollections> =>
  api.get('/collection/collection');

export interface IGetProductsParams {
  page: number;
  pageSize?: number;
  collection?: string;
}

export const getProducts = (params: IGetProductsParams): TResponse<TProducts> =>
  api.get('/product/product/', { params });

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