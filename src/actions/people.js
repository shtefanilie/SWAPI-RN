// @flow
import {
  FETCHING_PEOPLE,
  FETCHING_PEOPLE_FAILED,
  FETCHING_PEOPLE_SUCCESSFUL,
} from '../modules/people/constants';

export const fetchingPeople = () => ({
  type: FETCHING_PEOPLE,
});

export const fetchingPeopleSuccessful = (payload: People) => ({
  type: FETCHING_PEOPLE_SUCCESSFUL,
  payload,
});

export const fetchingPeopleFailed = (payload: Error) => ({
  type: FETCHING_PEOPLE_FAILED,
  payload,
});
