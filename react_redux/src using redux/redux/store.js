import { createStore } from 'redux';

import { counter } from './reducers';

const store = createStore(counter);
// console.log(store, store.getState());

export default store;
