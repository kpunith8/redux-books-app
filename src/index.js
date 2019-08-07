import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import YouTubeSearch from "./components/youtube-search/YouTubeSearch";
import BookAPI from "./components/book-api/BookAPI";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <YouTubeSearch />
  </Provider>,
  document.getElementById("root")
);
