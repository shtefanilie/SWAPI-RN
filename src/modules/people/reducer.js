// @flow
// CONSTANTS
import {
  FETCHING_PEOPLE,
  FETCHING_PEOPLE_FAILED,
  FETCHING_PEOPLE_SUCCESSFUL,
} from './constants';

// TYPES
import type {State, PeopleAction} from './types';

const defaultState: State = {
  loadingPeople: false,
  loadingFailed: false,
  people: {},
};

export const peopleReducer = (
  state: State = defaultState,
  action: PeopleAction,
): State => {
  switch (action.type) {
    case FETCHING_PEOPLE:
      return {...state, loadingPeople: true};
    case FETCHING_PEOPLE_SUCCESSFUL:
      return {...state, loadingPeople: false, people: action.payload};
    case FETCHING_PEOPLE_FAILED:
      return {...state, loadingPeople: false, loadingFailed: true};
    default:
      return state;
  }
};
