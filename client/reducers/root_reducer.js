import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import posts from "./posts_reducer";
import comments from "./comments_reducer";

const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer
});

export default rootReducer;