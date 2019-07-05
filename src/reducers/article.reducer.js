import { API_REQUEST_ARTICLE } from "../constants/actionTypes";

export default function articleReducer(
  state = { isLoading: false, error: null, article: {} },
  action
) {
  switch (action.type) {
      case API_REQUEST_ARTICLE:
      return {...state, article: { title: 'A Test article', id: '15'}};
    default:
      return state;
  }
}
