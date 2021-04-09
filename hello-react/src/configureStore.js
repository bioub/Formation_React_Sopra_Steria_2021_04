import { createStore } from "redux";

import reducer from "./store/reducer";

function configureStore() {
  /** @type {import('redux').Store} */
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}

export default configureStore;
