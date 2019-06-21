import { fetchArticlesHandler } from "./articles.saga";
import { fetchUserHandler } from "./user.saga";

import { all, takeLatest } from "redux-saga/effects";
import {
  API_REQUEST_ARTICLES,
  API_REQUEST_USER
} from "../constants/actionTypes";

export function* watchAll() {
  yield all([
    takeLatest(API_REQUEST_USER, fetchUserHandler),
    takeLatest(API_REQUEST_ARTICLES, fetchArticlesHandler)
  ]);
}
