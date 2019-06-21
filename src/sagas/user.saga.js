import { put } from "redux-saga/effects";
import {
  API_REQUEST_USER_SUCCESS,
  API_REQUEST_USER_FAILURE
} from "../constants/actionTypes";
import axios from "axios";

/**
 * Makes API request to fetch user and dispatches the appropriate action.
 * @returns {Promise<AxiosResponse<T>>}
 */
export function* fetchUserHandler() {
  try {
    const response = yield axios.get("http://localhost:3500/user"),
      { data } = response;

    yield put({ type: API_REQUEST_USER_SUCCESS, payload: { user: data } });
  } catch (error) {
    yield put({ type: API_REQUEST_USER_FAILURE, payload: { error } });
  }
}