import { put, takeLatest, call, all } from 'redux-saga/effects';
import { getCollections } from '../../firebase/firebase.requests';
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from './collections.actions';
import { FETCH_COLLECTIONS_START } from './collections.types';

function* fetchCollections() {
  try {
    const collections = yield call(getCollections);

    yield put(fetchCollectionsSuccess(collections));
  } catch (e) {
    yield put(fetchCollectionsFailure(e));
  }
}

function* onFetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollections);
}

export default function* collectionsSagas(): Generator {
  yield all([call(onFetchCollectionsStart)]);
}
