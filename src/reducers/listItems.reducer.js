import {API_CALL_REQUEST, API_CALL_SUCCESS } from '../constants/actionTypes';

const initialState = {
  isLoading: false,
  items: []
};

export default function listItems(state = initialState, action) {
    switch (action.type) {
        case API_CALL_REQUEST:
            return state;
        case API_CALL_SUCCESS:
            return state;
        default:
            return state;
    }
}