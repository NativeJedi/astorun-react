import { createSelector } from 'reselect';
import { RootState } from '../root.reducer';
import { ICollectionsState } from './collections.types';

const selectCollectionsState = ({ collections }: RootState) => collections;

export const selectCollections = createSelector(
  [selectCollectionsState],
  ({ collections }: ICollectionsState) => collections
);
