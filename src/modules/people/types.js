// @flow
export type State = {
  loadingPeople: boolean,
  loadingFailed: boolean,
  people: People,
};

export type PeopleAction = {
  type: string,
  payload: People,
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
