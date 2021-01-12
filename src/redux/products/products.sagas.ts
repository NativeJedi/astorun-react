import { all, takeLatest, call, put } from 'redux-saga/effects';
import { getCollections, getProducts, TProductsData } from '../../api/requests';
import { ERROR_NOTIFICATION } from '../../constants/notifications.constants';
import { ICollectionItem } from '../collections/collections.types';
import { addNotification } from '../notifications/notifications.actions';
import { fetchProductsFailure, fetchProductsSuccess } from './products.actions';
import {
  FETCH_PRODUCTS_START,
  FetchProductsStartAction,
} from './products.types';

function* fetchProducts({ payload }: FetchProductsStartAction) {
  try {
    // TODO: Add collection name to search products params
    const { data: collections } = yield call(getCollections);

    const collection = collections.find(
      ({ name }: ICollectionItem) => name === payload.collection
    );

    const { data } = yield call(getProducts, {
      ...payload,
      collection: collection?.id,
    });

    const { count, results } = data as TProductsData;

    yield put(
      fetchProductsSuccess({
        pages: count,
        products: results,
      })
    );
  } catch (e) {
    yield put(fetchProductsFailure(e));
    yield put(
      addNotification({
        type: ERROR_NOTIFICATION,
        message: e.message,
      })
    );
  }
}

function* onFetchProductsStart() {
  yield takeLatest(FETCH_PRODUCTS_START, fetchProducts);
}

export default function* productsSagas(): Generator {
  yield all([call(onFetchProductsStart)]);
}
