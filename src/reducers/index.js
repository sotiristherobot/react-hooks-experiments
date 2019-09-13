import { combineReducers } from "redux";
import user from "./user.reducer";
import articles from "./articles.reducer";
import article from "./article.reducer";
import likedarticles from "./likedarticles.reducer";
import userIsAuthed from "./userIsAuthed.reducer";

const rootReducer = combineReducers({ user, userIsAuthed, articles, article, likedarticles });
export default rootReducer;
