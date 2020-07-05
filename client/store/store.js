import { createStore } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

// import the root reducer
import rootReducer from "../reducers/root_reducer";

// import seed data
import posts from "../data/posts";
import comments from "../data/comments";

const preloadedState = { posts, comments };
const store = createStore(
  rootReducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const history = syncHistoryWithStore(browserHistory, store);

// // For hot reloading reducers with webpack
// if (module.hot) {
//   module.hot.accept("../reducers/root_reducer", () => {
//     const newRootReducer = require("../reducers/root_reducer").default;
//     store.replaceReducer(newRootReducer);
//   });
// }

export default store;
