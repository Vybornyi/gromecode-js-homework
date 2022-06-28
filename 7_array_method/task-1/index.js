const getSpecialNumbers = numbers => 
     numbers.filter(num => num % 3 === 0);


let number = [1, 3, 6, 7, 9, 12, 44, 5, 30];

console.log(getSpecialNumbers(number));
console.log(number);

