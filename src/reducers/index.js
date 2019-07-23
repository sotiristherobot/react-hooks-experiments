import { combineReducers } from "redux";
import user from "./user.reducer";
import articles from "./articles.reducer";
import article from "./article.reducer";
import likedarticles from "./likedarticles.reducer";

const rootReducer = combineReducers({ user, articles, article, likedarticles });
export default rootReducer;
