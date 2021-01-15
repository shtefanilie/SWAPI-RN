// @flow
import swapi from '../api';
import {
  FETCHING_PEOPLE,
  FETCH_PEOPLE_FAILED,
  FETCHED_PEOPLE_SUCCESSFUL,
  FETCHING_PEOPLE_COUNT,
  FETCHED_PEOPLE_COUNT,
  FETCH_PEOPLE_COUNT_FAILED,
} from '../modules/people/constants';
import type {
  People,
  PeopleAction,
  PeopleCount,
} from '../modules/people/types';

export const fetchingPeople = (): PeopleAction => ({
  type: FETCHING_PEOPLE,
});

export const fetchedPeople = (payload: People): PeopleAction => ({
  type: FETCHED_PEOPLE_SUCCESSFUL,
  payload,
});

export const fetchPeopleFailed = (payload: Error): PeopleAction => ({
  type: FETCH_PEOPLE_FAILED,
  payload,
});

export const fetchingPeopleCount = (): PeopleAction => ({
  type: FETCHING_PEOPLE_COUNT,
});

export const fetchedPeopleCount = (payload: PeopleCount): PeopleAction => ({
  type: FETCHED_PEOPLE_COUNT,
  payload,
});

export const fetchPeopleCountFailed = (payload: Error): PeopleAction => ({
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
