import axios from "axios";
import { put } from "redux-saga/effects";
import { API_REQUEST_ARTICLE_SUCCESS } from "../constants/actionTypes";

/**
 * Makes API request to fetch article. It makes a request to backend .
 * @returns {Promise<AxiosResponse<T>>}
 */
export function* fetchArticleHandler(article) {
  try {
    const response = yield axios.get(
        `http://localhost:3500/article/${article.payload.articleId}`
      ),
      { data } = response;
    yield put({
      type: API_REQUEST_ARTICLE_SUCCESS,
      payload: { article: data }
    });
  } catch (error) {
    console.log(error);
  }
}
