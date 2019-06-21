import { combineReducers } from "redux";
import user from './user.reducer';
import articles from './articles.reducer';

const rootReducer = combineReducers({user, articles});
export default rootReducer;