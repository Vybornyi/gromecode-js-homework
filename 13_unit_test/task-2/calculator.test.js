import getSum, { getSquaredArray, getOddNumbers } from './calculator.js';

it('shoul get squared numbers', () => {
  const result = getSquaredArray([1, 3, 5]);
  expect(result).toEqual([1, 9, 25]);
});
it('shoul get odd numbers', () => {
  const result = getOddNumbers([1, 3, 6]);
  expect(result).toEqual([1, 3]);
});
it('shoul get sum of numbers', () => {
  const result = getSum(1, 3);
  expect(result).toEqual(4);
});
