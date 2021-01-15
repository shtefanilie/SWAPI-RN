// @flow
export const generateRandomId = (limit: Int): Int => {
  return Math.floor(Math.random() * limit + 1);
};
