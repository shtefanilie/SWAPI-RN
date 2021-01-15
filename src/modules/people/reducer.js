// @flow
// CONSTANTS
import {
  FETCHING_PEOPLE,
  FETCH_PEOPLE_FAILED,
  FETCHED_PEOPLE_SUCCESSFUL,
  FETCHING_PEOPLE_COUNT,
  FETCHED_PEOPLE_COUNT,
  FETCH_PEOPLE_COUNT_FAILED,
} from './constants';

// TYPES
import type { State, PeopleAction } from './types';

const defaultState: State = {
  loadingPeople: false,
  loadingFailed: false,
  people: {},
  count: 0,
};

export const peopleReducer = (
  state: State = defaultState,
  action: PeopleAction,
): State => {
  switch (action.type) {
    case FETCHING_PEOPLE:
      return { ...state, loadingPeople: true };
    case FETCHED_PEOPLE_SUCCESSFUL:
      return { ...state, loadingPeople: false, people: action.payload };
    case FETCH_PEOPLE_FAILED:
      return { ...state, loadingPeople: false, loadingFailed: true };
    case FETCHING_PEOPLE_COUNT:
      return { ...state, loadingPeople: true };
    case FETCHED_PEOPLE_COUNT: {
      // $FlowFixMe
      const { count } = action.payload;
      return { ...state, loadingPeople: false, count: count };
    }
    case FETCH_PEOPLE_COUNT_FAILED:
      return { ...state, loadingPeople: false, loadingFailed: true };
    default:
      return state;
  }
};
