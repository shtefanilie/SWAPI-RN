// @flow
import type { SwapiResponse } from '../../types';

export type PeopleState = {
  loadingPeople: boolean,
  loadingFailed: boolean,
  people: ?People,
  count: number,
};

export type PeopleAction = {
  type: string,
  payload: SwapiResponse,
};

export type PeopleError = {
  type: string,
  payload: Error,
};

export type People = {
  name: string,
  height: string,
  mass: string,
  hairColor: string,
  skinColor: string,
  eyeColor: string,
  birthYear: string,
  gender: string,
};

export type PeopleCount = {
  count: number,
  next: string,
  previous: string,
  results: Array<People>,
};
