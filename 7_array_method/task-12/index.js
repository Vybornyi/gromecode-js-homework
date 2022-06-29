const arrAverage = arr => !Array.isArray(arr) ? null
    : (arr.reduce((a, b) =>
        a + b) / arr.length);


console.log(arrAverage([1, 3, 5, 3]));         