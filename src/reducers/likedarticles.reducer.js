import {
  GET_LIKED_ARTICLES,
  ADD_LIKED_ARTICLE,
  DELETE_LIKED_ARTICLE
} from "../constants/actionTypes";

export default function likedArticlesReducer(
  state = { likedArticles: [], lastLikedArticle: {}, lastDeletedArticle: {} },
  action
) {
  switch (action.type) {
    //ToDo simplify this since it's the same as default case?
    case GET_LIKED_ARTICLES:
      return state;
    case ADD_LIKED_ARTICLE:
      return {
        ...state,
        lastLikedArticle: action.payload,
        lastDeletedArticle: { ...state.lastDeletedArticle }
      };
    case DELETE_LIKED_ARTICLE:
      return {
        ...state,
        lastLikedArticle: {...state.lastLikedArticle},
        lastDeletedArticle: action.payload
      };
    default:
      return state;
  }
}
