import { createSelector, Selector } from 'reselect';
import { RootState } from '../root.reducer';
import { ICollectionsState, TCollections } from './collections.types';

const selectCollectionsState = ({ collections }: RootState) => collections;

export const selectCollections: Selector<
  RootState,
  TCollections
> = createSelector(
  [selectCollectionsState],
  ({ collections }: ICollectionsState) => collections
);

export const selectCollectionsLoading: Selector<
  RootState,
  boolean
> = createSelector(
  [selectCollectionsState],
  ({ isLoading }: ICollectionsState): boolean => isLoading
);
