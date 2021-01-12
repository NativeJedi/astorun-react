import { createSelector, Selector } from 'reselect';
import { RootState } from '../root.reducer';
import { IProductsState, TProducts } from './products.types';

const selectProductsState = ({ products }: RootState): IProductsState =>
  products;

export const selectProducts: Selector<RootState, TProducts> = createSelector(
  [selectProductsState],
  ({ products }) => products
);

export const selectProductsPages: Selector<RootState, number> = createSelector(
  [selectProductsState],
  ({ pages }) => pages
);

export const selectProductsLoading: Selector<
  RootState,
  boolean
> = createSelector([selectProductsState], ({ isLoading }) => isLoading);
