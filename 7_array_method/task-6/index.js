const reverseArray = numbers => !Array.isArray(numbers) ? null :
    numbers.slice().reverse();


let arr = [1, 4, 6, 7, 2];
console.log(reverseArray(arr));
console.log(arr);
