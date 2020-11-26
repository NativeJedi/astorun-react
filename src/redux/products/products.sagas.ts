import { all, takeLatest, call, put } from 'redux-saga/effects';
import { getProducts } from '../../firebase/firebase.requests';
import { fetchProductsFailure, fetchProductsSuccess } from './products.actions';
import { FETCH_PRODUCTS_START } from './products.types';

function* fetchProducts() {
  try {
    const products = yield call(getProducts);

    yield put(fetchProductsSuccess(products));
  } catch (e) {
    yield put(fetchProductsFailure(e));
  }
}

function* onFetchProductsStart() {
  yield takeLatest(FETCH_PRODUCTS_START, fetchProducts);
}

export default function* productsSagas(): Generator {
  yield all([call(onFetchProductsStart)]);
}
