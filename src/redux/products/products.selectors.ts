import { createSelector } from 'reselect';
import { RootState } from '../root.reducer';
import { IProductsState } from './products.types';

const selectProductsState = ({ products }: RootState): IProductsState =>
  products;

export const selectProducts = createSelector(
  [selectProductsState],
  ({ products }) => products
);

export const selectProductsLoading = createSelector(
  [selectProductsState],
  ({ isLoading }) => isLoading
);
