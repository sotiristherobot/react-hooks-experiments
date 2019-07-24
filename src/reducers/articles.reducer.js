import {
  API_REQUEST_ARTICLES,
  API_REQUEST_ARTICLES_SUCCESS,
  API_REQUEST_ARTICLES_FAILURE
} from "../constants/actionTypes";

export default function articlesReducer(
  state = { loadingArticles: false, articles: [], error: null },
  action
) {
  switch (action.type) {
    case API_REQUEST_ARTICLES:
      return { ...state, loadingArticles: true, articles: [] };
    case API_REQUEST_ARTICLES_SUCCESS:
      return {
        articles: action.payload.articles,
        error: null
      };
    case API_REQUEST_ARTICLES_FAILURE:
      return {
        articles: [],
        error: action.payload.error
      };
    default:
      return state;
  }
}
