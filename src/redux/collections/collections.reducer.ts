import { Reducer } from 'redux';
import {
  CollectionsActionTypes,
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  ICollectionsState,
} from './collections.types';

const INITIAL_STATE: ICollectionsState = {
  collections: [],
  isLoading: false,
  error: null,
};

const collectionsReducer: Reducer<ICollectionsState, CollectionsActionTypes> = (
  state = INITIAL_STATE,
  action: CollectionsActionTypes
): ICollectionsState => {
  switch (action.type) {
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isLoading: false,
        error: null,
      };
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        collections: [],
      };
    default:
      return state;
  }
};

export default collectionsReducer;
