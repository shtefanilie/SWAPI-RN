// @flow
import type { People } from './types';
import type { GlobalState } from '../../types';

export const selectPeople = (state: GlobalState): People => state.people.people;

export const selectPeopleCount = (state: GlobalState): number =>
  state.people.count;

export const selectLoadingPeople = (state: GlobalState): boolean =>
  state.people.loadingPeople;

export const selectPeopleByEyeColor = (state) => state.people.peopleByEyeColor;
