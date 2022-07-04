/* eslint-disable prefer-const */
function createCalculator() {
  let memNum = 0;
  let add = num => {
    return (memNum += num);
  };
  const decrease = num => {
    return (memNum -= num);
  };
  const reset = () => {
    returnmemNum = 0;
  };
  const getMemo = () => {
    return memNum;
  };
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
}
let text1 = createCalculator();

console.log(text1.add(1));
console.log(text1.add(1));
console.log(text1.add(1));

console.log(text1.add(1));
let text2 = createCalculator(1);

console.log(text2.decrease(1));
console.log(text2.decrease(1));
console.log(text2.decrease(1));

console.log(text2.decrease(1));
