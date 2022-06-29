const squareArray = numbers => !Array.isArray(numbers) ? null :
    numbers.map(number => number * number);


let arr = '';
console.log(squareArray(arr));
console.log(arr);
