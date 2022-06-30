'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
const getMaxAbsoluteNumber = arr => {
    // put your code here
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }
    const absoluteValue = arr.map(num => Math.abs(num));
    return Math.max(...absoluteValue);

};

// examples
console.log(getMaxAbsoluteNumber()); // ===> 10
getMaxAbsoluteNumber([2.1, 0, 1.6]); // ===> 2.1
getMaxAbsoluteNumber([-6, 3, 5, -1]); // ===> 6
getMaxAbsoluteNumber([-777, 3, -1, 45, -20]); // ===> 777
