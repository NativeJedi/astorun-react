import { all, call, put, takeEvery } from 'redux-saga/effects';
import { getProductsByIds } from '../../api/requests';
import { CART_ITEMS_STORAGE_KEY } from '../../constants/cart.constants';
import { ERROR_NOTIFICATION } from '../../constants/notifications.constants';
import LocalStorageService from '../../services/local-storage.service';
import { TStoredCartItems } from '../../types/storage.types';
import { addNotification } from '../notifications/notifications.actions';
import { loadCartFailureAction, loadCartSuccessAction } from './cart.actions';
import { LOAD_CART_START } from './cart.types';

function* loadCart() {
  try {
    const storedCartItems = LocalStorageService.getItem<TStoredCartItems>(
      CART_ITEMS_STORAGE_KEY
    );

    if (!storedCartItems || !storedCartItems.length) {
      yield put(loadCartSuccessAction({}));
      return;
    }

    const productIds = storedCartItems.map(({ id }) => id);

    const productsResponses = yield getProductsByIds(productIds);

    console.log('productsResponses:', productsResponses);
    // const products = productsResponses.map(({ data }) => data);
    //
    // const cartItems = formCartItems(storedCartItems, products);
    //
    // yield put(loadCartSuccessAction(cartItems));
  } catch (e) {
    yield put(loadCartFailureAction(e));
    yield put(
      addNotification({
        type: ERROR_NOTIFICATION,
        message: e.message,
      })
    );
  }
}

function* onLoadCartStart() {
  yield takeEvery(LOAD_CART_START, loadCart);
}

export default function* cartSagas(): Generator {
  yield all([call(onLoadCartStart)]);
}
