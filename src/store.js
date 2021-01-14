import {combineReducers} from 'redux';
import {peopleReducer} from '../src/modules/people/reducer';

export const rootReducer = combineReducers({
  people: peopleReducer,
});
