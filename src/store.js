import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { peopleReducer } from '../src/modules/people/reducer';

export const rootReducer = combineReducers({
  people: peopleReducer,
});

export const store = createStore(rootReducer);
