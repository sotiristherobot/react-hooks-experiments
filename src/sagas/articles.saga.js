import {
  API_REQUEST_ARTICLES_SUCCESS,
  API_REQUEST_ARTICLES_FAILURE
} from "../constants/actionTypes";
import axios from "axios";
import { put } from "redux-saga/effects";

/**
 * Makes API request to fetch articles and dispatches the appropriate action.
 * @returns {Promise<AxiosResponse<T>>}
 */
export function* fetchArticlesHandler() {
  try {
    const response = yield axios.get("http://localhost:3500/article"),
      { data } = response;
    yield put({
      type: API_REQUEST_ARTICLES_SUCCESS,
      payload: { articles: data }
    });
  } catch (error) {
    yield put({ type: API_REQUEST_ARTICLES_FAILURE, payload: { error } });
  }
}
