/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */
const superRound = (num, prec) => {
    // put your code here
    const index = 10 ** prec;
    return [Math.floor(num * index) / index, Math.trunc(num * index) / index, Math.ceil(num * index) / index, Math.round(num * index) / index, +num.toFixed(prec)];
};

// examples
console.log(superRound(11.12556, 1)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log([6.11, 6.11, 6.11, 6.11, 6.11].map(number => number.toFixed(3)));
