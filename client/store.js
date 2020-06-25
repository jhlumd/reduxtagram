import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

// import the root reducer
import rootReducer from "./reducers/root_reducer";

// import seed data
import posts from "./data/posts";
import comments from "./data/comments";

const preloadedState = { posts, comments };

const store = createStore(rootReducer, preloadedState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;