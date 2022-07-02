import { getMinSquaredNumber } from './getMinSquaredNumber.js';

it('should get min squared number of array', () => {
  const result = getMinSquaredNumber([1, 4, -7, 45, -20]);
  expect(result).toEqual(400);
});
it('should get min squared number of array 2', () => {
  const result = getMinSquaredNumber('sadd');
});
it('should get min squared number of array 3', () => {
  const result = getMinSquaredNumber([]);
});
