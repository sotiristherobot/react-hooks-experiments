import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "../constants/actionTypes";

export default function userReducer(
  state = { loadingUser: false, user: null, error: null },
  action
) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, loadingUser: true, user: null, error: null };
    case API_CALL_SUCCESS:
      return {
        ...state,
        loadingUser: false,
        user: action.payload.user,
        error: null
      };
    case API_CALL_FAILURE:
      return { ...state, loadingUser: false, user: null, error: action.payload.error };
    default:
      return state;
  }
}
