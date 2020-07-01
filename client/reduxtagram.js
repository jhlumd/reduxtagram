import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";

// Import styles
import css from "./styles/style.styl";

// Import Components
import Main from "./components/main";
import Single from "./components/single";
import PhotoGrid from "./components/photo_grid";

// Import store
import store, { history } from "./store";

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid} />
      <Route path="/view/:postId" component={Single} />
    </Route>
  </Router>
);

render(router, document.getElementById("root"));