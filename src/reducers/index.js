import { combineReducers } from "redux";
import user from "./user.reducer";
import articles from "./articles.reducer";
import article from "./article.reducer";

const rootReducer = combineReducers({ user, articles, article });
export default rootReducer;
