import { all, call } from 'redux-saga/effects';
import collectionsSagas from './collections/collections.sagas';
import productsSagas from './products/products.sagas';

export default function* rootSaga(): Generator {
  yield all([call(collectionsSagas), call(productsSagas)]);
}
