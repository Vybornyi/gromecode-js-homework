const flatArray = numbers => {
return numbers.slice().flat().sort((a,b)=>a-b);
};
const numArr = [1, 5, [6, 2], 3];
console.log(flatArray(numArr));
console.log(numArr);
