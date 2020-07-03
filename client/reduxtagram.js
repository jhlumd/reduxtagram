import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute } from "react-router";
import { Provider } from "react-redux";

// Import styles
import css from "./styles/style.styl";

// Import Components
import MainContainer from "./components/main_container";
import PhotoGrid from "./components/photo_grid";
import Single from "./components/single";

// Import store
import store, { history } from "./store/store";

const reduxtagramApp = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={MainContainer}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(reduxtagramApp, document.getElementById("root"));
