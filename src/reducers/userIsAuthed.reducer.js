import {API_AUTH_USER, API_IS_USER_AUTHED} from "../constants/actionTypes";

export default function userIsAuthed(
    state = {userId: null, userIsAuthorized: false},
    action
) {
    switch (action.type) {
        case API_AUTH_USER:
            return {userId: 123, userIsAuthorized: true};
        case API_IS_USER_AUTHED: {
            return state;
        }
        default: {
            return state;
        }
    }
}