// @flow
// API
import swapi from '../api';

// CONSTANTS
import {
  FETCHING_PEOPLE,
  FETCH_PEOPLE_FAILED,
  FETCHED_PEOPLE_SUCCESSFUL,
  FETCHING_PEOPLE_COUNT,
  FETCHED_PEOPLE_COUNT,
  FETCH_PEOPLE_COUNT_FAILED,
} from '../modules/people/constants';

// TYPES
import type {
  People,
  PeopleAction,
  PeopleCount,
  PeopleError,
} from '../modules/people/types';
import type { SwapiResponse } from '../types';

export const fetchingPeople = () => ({
  type: FETCHING_PEOPLE,
});

export const fetchedPeople = (payload: SwapiResponse): PeopleAction => ({
  type: FETCHED_PEOPLE_SUCCESSFUL,
  payload,
});

export const fetchPeopleFailed = (payload: Error): PeopleError => ({
  type: FETCH_PEOPLE_FAILED,
  payload,
});

export const fetchingPeopleCount = () => ({
  type: FETCHING_PEOPLE_COUNT,
});

export const fetchedPeopleCount = (payload: SwapiResponse): PeopleAction => ({
  type: FETCHED_PEOPLE_COUNT,
  payload,
});

export const fetchPeopleCountFailed = (payload: Error): PeopleError => ({
  type: FETCH_PEOPLE_COUNT_FAILED,
  payload,
});

export const getPeople = (personId: number): Function => async (
  dispatch: Function,
): Promise<People> => {
  try {
    dispatch(fetchingPeople());
    const resp = await swapi.get(`/people/${personId}`);
    dispatch(fetchedPeople(resp));
    return resp;
  } catch (e) {
    dispatch(fetchPeopleFailed(e));
    throw e;
  }
};

export const getPeopleCount = (): Function => async (
  dispatch: Function,
): Promise<PeopleCount> => {
  try {
    dispatch(fetchingPeopleCount());
    const resp = await swapi.get(`/people`);
    dispatch(fetchedPeopleCount(resp));
    return resp;
  } catch (e) {
    dispatch(fetchPeopleCountFailed(e));
    throw e;
  }
};
