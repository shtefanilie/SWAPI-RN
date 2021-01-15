// @flow
import type { State, People } from './types';

export const selectPeople = (state: State): People => state.people;

export const selectPeopleCount = (state: State): number => state.count;

export const selectLoadingPeople = (state: State): boolean =>
  state.loadingPeople;
