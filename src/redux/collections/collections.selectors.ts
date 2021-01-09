import { createSelector, Selector } from 'reselect';
import { RootState } from '../root.reducer';
import { ICollectionItem, ICollectionsState } from './collections.types';

const selectCollectionsState = ({ collections }: RootState) => collections;

export const selectCollections = createSelector(
  [selectCollectionsState],
  ({ collections }: ICollectionsState) => collections
);

export const selectCollectionByName = (
  searchName: string
): Selector<RootState, ICollectionItem | undefined> =>
  createSelector([selectCollections], (collections):
    | ICollectionItem
    | undefined => {
    console.log('collections:', collections);
    return collections.find(({ name }) => name === searchName);
  });

export const selectCollectionsLoading = createSelector(
  [selectCollectionsState],
  ({ isLoading }: ICollectionsState): boolean => isLoading
);
