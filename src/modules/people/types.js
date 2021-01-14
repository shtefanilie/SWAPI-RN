// @flow
export type State = {
  loadingPeople: boolean,
  loadingFailed: boolean,
  people: Object,
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
