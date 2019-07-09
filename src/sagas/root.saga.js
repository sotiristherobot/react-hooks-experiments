import { fetchArticlesHandler } from "./articles.saga";
import { fetchArticleHandler } from "./article.saga";
import { fetchUserHandler } from "./user.saga";

import { all, takeLatest } from "redux-saga/effects";
import {
  API_REQUEST_ARTICLES,
  API_REQUEST_USER,
  API_REQUEST_ARTICLE
} from "../constants/actionTypes";

export function* watchAll() {
  yield all([
    takeLatest(API_REQUEST_USER, fetchUserHandler),
    takeLatest(API_REQUEST_ARTICLES, fetchArticlesHandler),
    takeLatest(API_REQUEST_ARTICLE, fetchArticleHandler)
  ]);
}
