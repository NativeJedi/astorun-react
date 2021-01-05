import { all, takeLatest, call, put } from 'redux-saga/effects';
import { getProducts } from '../../api/requests';
import { fetchProductsFailure, fetchProductsSuccess } from './products.actions';
import { FETCH_PRODUCTS_START } from './products.types';

function* fetchProducts() {
  try {
    const { data } = yield call(getProducts, { page: 1 });

    yield put(fetchProductsSuccess(data));
  } catch (e) {
    yield put(fetchProductsFailure(e));
    throw new Error(e);
  }
}

function* onFetchProductsStart() {
  yield takeLatest(FETCH_PRODUCTS_START, fetchProducts);
}

export default function* productsSagas(): Generator {
  yield all([call(onFetchProductsStart)]);
}
