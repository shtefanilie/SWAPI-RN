// @flow
import {
  FETCHING_PEOPLE,
  FETCHING_PEOPLE_FAILED,
  FETCHING_PEOPLE_SUCCESSFUL,
} from '../modules/people/constants';
import type {People, PeopleAction} from '../modules/people/types';

export const fetchingPeople = (): PeopleAction => ({
  type: FETCHING_PEOPLE,
});

export const fetchingPeopleSuccessful = (payload: People): PeopleAction => ({
  type: FETCHING_PEOPLE_SUCCESSFUL,
  payload,
});

export const fetchingPeopleFailed = (payload: Error): PeopleAction => ({
  type: FETCHING_PEOPLE_FAILED,
  payload,
});
