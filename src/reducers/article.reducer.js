import { API_REQUEST_ARTICLE, REQUEST_ARTICLE, API_REQUEST_ARTICLE_SUCCESS } from "../constants/actionTypes";

export default function articleReducer(
  state = {
    isLoading: false,
    error: null,
    article: {},
    savedArticle: { title: "A Test article", id: "32" }
  },
  action
) {
  switch (action.type) {
    case REQUEST_ARTICLE:
      return { ...state };
    case API_REQUEST_ARTICLE:
      return { ...state };
      case API_REQUEST_ARTICLE_SUCCESS:
          return {...state, savedArticle: {...action.payload.article}, article: {...action.payload.article}};
    default:
      return state;
  }
}
