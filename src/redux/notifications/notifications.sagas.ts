import { all, call, put, takeEvery, delay } from 'redux-saga/effects';
import { removeNotification as removeNotificationAction } from './notifications.actions';
import {
  ADD_NOTIFICATION,
  IAddNotificationAction,
} from './notifications.types';

function* removeNotification(action: IAddNotificationAction) {
  yield delay(5000);
  yield put(removeNotificationAction(action.payload.id));
}

function* onAddNotification() {
  yield takeEvery(ADD_NOTIFICATION, removeNotification);
}

export function* notificationsSagas(): Generator {
  yield all([call(onAddNotification)]);
}
