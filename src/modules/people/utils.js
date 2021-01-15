// @flow
export const generateRandomId = (count: Int): Int => {
  return Math.floor(Math.random() * count + 1);
};
