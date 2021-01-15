import { generateRandomId } from '../utils';

describe('generateRandomId', () => {
  describe('given a positive integer', () => {
    let limit = 1000;
    let result = generateRandomId(limit);

    it('should generate a random number between 0 and 10', () => {
      expect(result).toBeLessThan(1000);
      expect(result).toBeGreaterThan(0);
    });
    it('should have a different value after the second call', () => {
      const secondResult = generateRandomId(limit);
      expect(secondResult).toBeLessThan(1000);
      expect(secondResult).toBeGreaterThan(0);
      expect(secondResult).not.toEqual(result);
    });
  });
});
