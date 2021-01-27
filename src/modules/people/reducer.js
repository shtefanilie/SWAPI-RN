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
import type { PeopleState, PeopleAction, PeopleError } from './types';

const defaultState: PeopleState = {
  loadingPeople: false,
  loadingFailed: false,
  people: null,
  count: 0,
  peopleByEyeColor: null,
};

export const peopleReducer = (
  state: PeopleState = defaultState,
  action: PeopleAction,
): PeopleState => {
  switch (action.type) {
    case FETCHING_PEOPLE:
      return { ...state, loadingPeople: true };
    case FETCHED_PEOPLE_SUCCESSFUL:
      return { ...state, loadingPeople: false, people: action.payload.data };
    case FETCH_PEOPLE_FAILED:
      return {
        ...state,
        loadingPeople: false,
        loadingFailed: true,
        payload: action.payload,
      };
    case FETCHING_PEOPLE_COUNT:
      return { ...state, loadingPeople: true };
    case FETCHED_PEOPLE_COUNT: {
      const { count, results } = action.payload.data;
      const peopleByEyeColor = results.reduce((acc, person) => {
        if (!acc[person.eye_color]) {
          acc[person.eye_color] = [];
        }
        acc[person.eye_color].push(person);
        return acc;
      }, {});
      return {
        ...state,
        loadingPeople: false,
        count: count,
        peopleByEyeColor: peopleByEyeColor,
      };
    }
    case FETCH_PEOPLE_COUNT_FAILED:
      return {
        ...state,
        loadingPeople: false,
        loadingFailed: true,
        payload: action.payload,
      };
    default:
      return state;
  }
};
