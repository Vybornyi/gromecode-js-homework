import { reverseArray, withdraw, getAdults } from './functions.js';

it('should get reverce of array', () => {
  const result = reverseArray([1, 4, 7, 45, 20]);
  expect(result).toEqual([20, 45, 7, 4, 1]);
});

it('should get reverce of array variant 2', () => {
  const result = reverseArray(['s', 'A', 7, '45', 20]);
  expect(result).toEqual([20, '45', 7, 'A', 's']);
});

it('should get null if not array', () => {
  const result = reverseArray(123);
  expect(result).toEqual(null);
});

it('should get balance of a client if enough', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});
it('should get -1 if not enough at balance of client', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);
});
it('should get underfine if client is not in array', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Leon', 10);
  expect(result).toEqual(undefined);
});

it('should get two clients of array', () => {
  const result = getAdults(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});
it('should get one clients of array', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});
it('should get empty array', () => {
  const result = getAdults({});
  expect(result).toEqual({});
});
