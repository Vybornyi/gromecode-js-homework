import { calc } from './calculator.js';

it('should get summ of numbers ', () => {
  const result = calc('7 + 8');
  expect(result).toEqual('7 + 8 = 15');
});

it('should get diference of numbers ', () => {
  const result = calc('7 - 8');
  expect(result).toEqual('7 - 8 = -1');
});

it('should get multiplication of numbers ', () => {
  const result = calc('7 * 8');
  expect(result).toEqual('7 * 8 = 56');
});

it('should get division of numbers ', () => {
  const result = calc('56 / 8');
  expect(result).toEqual('56 / 8 = 7');
});

it('should get null if not a string ', () => {
  const result = calc(56 / 8);
  expect(result).toEqual(null);
});
