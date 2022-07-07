/**
 * @param {function} func
 * @return {function}
 */

// 1.create new array callsHistory
// 2.create function wraper withMemory
// 3.arguments of wraper func save in array
// 4.array assign as propery to wraper
// 5. return func

function saveFuncCalls(func) {
  // put your code here
  const callsHistory = [];
  return function WithMemory(...arg) {
    callsHistory.push(arg);
    WithMemory.callsHistory = callsHistory;
    return func.call(this, ...arg);
  };
}

// example 1
function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}

const sumWithMemory = saveFuncCalls(sum);
console.log(sumWithMemory(4, 2)); // ===> 6
console.log(sumWithMemory(9, 1)); // ===> 10

console.log(sumWithMemory.callsHistory); // ===> [ [4, 2], [9, 1] ]

// example 2
/* function addDelta(array, delta) {
  return array.map(el => el + delta);
}

const addDeltaWithMemory = saveFuncCalls(addDelta);
addDeltaWithMemory([111, 22, 55, 4], 8); // ===> [119, 30, 63, 12]
addDeltaWithMemory([9, 1, -8, 15, 7, 0], 7); // ===> [16, 8, -1, 22, 14, 7]

addDeltaWithMemory.callsHistory; // ===> [ [[111, 22, 55, 4], 8], [[9, 1, -8, 15, 7, 0], 7] ]

// example 3
const user = {
  name: 'John',
  sayHi() {
    return this.name;
  },
};

const sayHiWithMemory = saveFuncCalls(user.sayHi);
// sayHiWithMemory(); // ===> throw error // because sayHiWithMemory lost context
const sayHiWithMemoryBinded = sayHiWithMemory.bind({ name: 'Tom' });
console.log(sayHiWithMemoryBinded()); // ===> Tom // because we fixed context with bind and run functon again

console.log(sayHiWithMemory.callsHistory); // [ [] ]
 
 */
