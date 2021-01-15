// @flow
export const generateRandomId = (limit: number): number => {
  return Math.floor(Math.random() * limit + 1);
};
