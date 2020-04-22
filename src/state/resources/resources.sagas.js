import { call, takeLatest, put } from "redux-saga/effects";
import { resourcesURL } from '../../utils/constants';

// API
import axios from "axios";

// Actions
import { actions, fetchAllResources } from "./resources.actions";

const fetchList = async () => await axios.get(`${resourcesURL}`, {});

function* resourcesRequest() {
  try {
    const result = yield call(fetchList);
    if (result && result.data) {
      return yield put(fetchAllResources.success(result.data));
    }
    return yield put(fetchAllResources.failure("Unknown Error"));
  } catch ({ response: { data }, message }) {
    if (data) {
      const error = typeof data === "string" ? data : data.code;
      return yield put(fetchAllResources.failure(error));
    }
    return yield put(fetchAllResources.failure(message));
  }
}

export default [
  takeLatest(actions.RESOURCES_FETCH_ALL_REQUEST, resourcesRequest),
];
