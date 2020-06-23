import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

// import the root reducer
import rootReducer from "./reducers/index";

// import seed data
import posts from "./data/posts";
import comments from "./data/comments";

const preloadedState = { posts, comments };
