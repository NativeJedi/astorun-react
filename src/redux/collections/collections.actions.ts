import { IError } from '../../types/error.type';
import {
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FetchCollectionFailureAction,
  FetchCollectionsStartAction,
  FetchCollectionsSuccessAction,
  TCollections,
} from './collections.types';

export const fetchCollectionsSuccess = (
  collections: TCollections
): FetchCollectionsSuccessAction => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionsStart = (): FetchCollectionsStartAction => ({
  type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsFailure = (
  error: IError
): FetchCollectionFailureAction => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: error,
});
