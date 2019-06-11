import { takeLatest, call, put } from "redux-saga/effects";
import {
  API_CALL_FAILURE,
  API_CALL_REQUEST,
  API_CALL_SUCCESS
} from "../constants/actionTypes";
import axios from "axios";

/**
 * Generator that watches for API_CALL_REQUEST and calls handleFetchUser to fetch a new user
 * @returns {IterableIterator<ForkEffect>}
 */
export function* watchUser() {
  yield takeLatest(API_CALL_REQUEST, handleFetchUser);
}

function fetchUser() {
  return axios.get(
    "http://localhost:3500/user"
  );
}

/**
 * Makes API request to fetch user
 * @returns {Promise<AxiosResponse<T>>}
 */
function* handleFetchUser() {
  try {
    const response = yield call(fetchUser),
      { data } = response;

    yield put({ type: API_CALL_SUCCESS, payload: { user: data } });
  } catch (error) {

    yield put({ type: API_CALL_FAILURE, payload: { error } });
  }
}
