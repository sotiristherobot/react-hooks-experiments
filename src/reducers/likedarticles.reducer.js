import {
  ADD_LIKED_ARTICLE,
  DELETE_LIKED_ARTICLE
} from "../constants/actionTypes";

export default function likedArticlesReducer(
  state = { likedArticles: [], lastLikedArticle: {}, lastDeletedArticle: {} },
  action
) {
  switch (action.type) {
    case ADD_LIKED_ARTICLE:
      return {
        likedArticles: [...state.likedArticles, action.payload],
        lastLikedArticle: action.payload,
        lastDeletedArticle: { ...state.lastDeletedArticle }
      };
    case DELETE_LIKED_ARTICLE:
      return {
        likedArticles: state.likedArticles.filter(
          v => v.articleIndex !== action.payload.articleIndex
        ),
        lastLikedArticle: { ...state.lastLikedArticle },
        lastDeletedArticle: action.payload
      };
    default:
      return state;
  }
}
