// @flow
import type { People, PeopleState, PeopleCount } from './modules/people/types';

export type GlobalState = {
  people: PeopleState,
};

export type SwapiResponse = {
  data: Object,
  status: number,
};
