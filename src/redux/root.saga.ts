import { all, call } from 'redux-saga/effects';
import cartSagas from './cart/cart.sagas';
import collectionsSagas from './collections/collections.sagas';
import { notificationsSagas } from './notifications/notifications.sagas';
import productsSagas from './products/products.sagas';

export default function* rootSaga(): Generator {
  yield all([
    call(collectionsSagas),
    call(productsSagas),
    call(notificationsSagas),
    call(cartSagas),
  ]);
}
