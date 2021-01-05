import { IError } from '../../types/error.types';

export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START';
export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS';
export const FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE';

export interface ICollectionItem {
  image: string;
  name: string;
  id: string;
}

export type TCollections = ICollectionItem[];

export interface ICollectionsState {
  collections: TCollections;
  isLoading: boolean;
  error: IError | null;
}

export interface FetchCollectionsStartAction {
  type: typeof FETCH_COLLECTIONS_START;
  payload?: null;
}

export interface FetchCollectionsSuccessAction {
  type: typeof FETCH_COLLECTIONS_SUCCESS;
  payload: TCollections;
}

export interface FetchCollectionFailureAction {
  type: typeof FETCH_COLLECTIONS_FAILURE;
  payload: IError;
}

export type CollectionsActionTypes =
  | FetchCollectionsSuccessAction
  | FetchCollectionsStartAction
  | FetchCollectionFailureAction;
