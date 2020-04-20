import { all } from 'redux-saga/effects';

// Saga
import resources from '../resources';
import business from '../business';

export function* rootSaga() {
  yield all([...resources.sagas.default, ...business.sagas.default]);
}
