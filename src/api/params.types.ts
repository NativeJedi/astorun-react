import { AxiosResponse } from 'axios';

export type TResponse<D> = Promise<AxiosResponse<D>>;

export interface IGetProductsParams {
  page: number;
  pageSize?: number;
  collection?: string;
}
