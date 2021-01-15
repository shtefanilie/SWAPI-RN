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
import type { PeopleState, PeopleAction } from './types';

const defaultState: PeopleState = {
  loadingPeople: false,
  loadingFailed: false,
  people: null,
  count: 0,
};

export const peopleReducer = (
  state: PeopleState = defaultState,
  action: PeopleAction,
): PeopleState => {
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
