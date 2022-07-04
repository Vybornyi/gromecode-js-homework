// put your code here
let numInMemory = 0;
export function add(number) {
  numInMemory += number;
}
export function decrease(number) {
  numInMemory -= number;
}
export function reset(number) {
  numInMemory = 0;
}
export function getMemo() {
  return numInMemory;
}
