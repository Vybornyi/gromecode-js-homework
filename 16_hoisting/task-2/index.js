function createArrayOfFunctions(num) {
  if (Number.isInteger(num) || num === undefined) {
    const arr = [];
    for (let i = 0; i < num; i += 1) {
      arr[i] = function () {
        return i;
      };
    }
    return arr;
  }
  return null;
}
console.log(createArrayOfFunctions('g'));
