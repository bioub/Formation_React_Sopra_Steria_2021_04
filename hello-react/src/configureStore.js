import { createStore } from 'redux';

import reducer from './store/reducer';

function configureStore() {
  /** @type {import('redux').Store} */
  const store = createStore(reducer);

  return store;
};

export default configureStore;