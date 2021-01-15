import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';

import { peopleReducer } from '../src/modules/people/reducer';

export const rootReducer = combineReducers({
  people: peopleReducer,
});

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
