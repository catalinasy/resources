import { call, takeLatest, put } from 'redux-saga/effects';

// API
import axios from 'axios';

// Actions
import { actions, fetchBusiness } from './business.actions';

const resourcesURL =
  'https://forward.livestories.com/api/business?filter={"where":{"idBusiness":{"eq":102}},"include":[{"relation":"eligibilities","scope":{"include":[{"relation":"idResource"}]}}]}';

const fetchById = async () => await axios.get(`${resourcesURL}`, {});

function* businessRequest() {
  try {
    const result = yield call(fetchById);
    if (result && result.data) {
      return yield put(fetchBusiness.success(result.data));
    }
    return yield put(fetchBusiness.failure('Unknown Error'));
  } catch ({ response: { data }, message }) {
    if (data) {
      const error = typeof data === 'string' ? data : data.code;
      return yield put(fetchBusiness.failure(error));
    }
    return yield put(fetchBusiness.failure(message));
  }
}

export default [takeLatest(actions.BUSINESS_REQUEST, businessRequest)];
