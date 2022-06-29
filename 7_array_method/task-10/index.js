const sum = arr => !Array.isArray(arr) ? null
    : arr.reduce( (a, b)=>
    a + b);


console.log(sum([1, 3, 5, 3])); 

console.log([0, 1, 2, 3, 4].reduce( (a, b)=>
    a + b));