import {
  API_REQUEST_USER,
  API_REQUEST_USER_SUCCESS,
  API_REQUEST_USER_FAILURE
} from "../constants/actionTypes";

export default function userReducer(
  state = { loadingUser: false, user: null, error: null },
  action
) {
  switch (action.type) {
    case API_REQUEST_USER:
      return { ...state, loadingUser: true, user: null, error: null };
    case API_REQUEST_USER_SUCCESS:
      return {
        ...state,
        loadingUser: false,
        user: action.payload.user,
        error: null
      };
    case API_REQUEST_USER_FAILURE:
      return {
        ...state,
        loadingUser: false,
        user: null,
        error: action.payload.error
      };
    default:
      return state;
  }
}
