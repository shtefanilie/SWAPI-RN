// @flow
export type State = {
  loadingPeople: boolean,
  loadingFailed: boolean,
  people: Object,
  count: number,
};

export type PeopleAction = {
  type: string,
  payload?: Object,
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
