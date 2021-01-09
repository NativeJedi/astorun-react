import { put, takeLatest, call, all } from 'redux-saga/effects';
import { getCollections } from '../../api/requests';
import { ERROR_NOTIFICATION } from '../../constants/notifications.constants';
import { addNotification } from '../notifications/notifications.actions';
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from './collections.actions';
import { FETCH_COLLECTIONS_START } from './collections.types';

function* fetchCollections() {
  try {
    const { data } = yield call(getCollections);

    yield put(fetchCollectionsSuccess(data));
  } catch (e) {
    yield put(fetchCollectionsFailure(e));
    yield put(
      addNotification({
        type: ERROR_NOTIFICATION,
        message: e.message,
      })
    );
  }
}

function* onFetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollections);
}

export default function* collectionsSagas(): Generator {
  yield all([call(onFetchCollectionsStart)]);
}
