const getValue = (value, delay) => {
  return new Promise(resolved => {
    setTimeout(() => {
      resolved(value);
    }, delay);
  });

};

const asyncNumber1 = getValue('99', 2000);
const asyncNumber2 = getValue(undefined, 2000);
const asyncNumber3 = getValue(8, 2000);

const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then(numbers => {
      return numbers
        .filter(value => !isNaN(value))
        .reduce((acc, num) => acc + Number(num), 0);
    })
    .catch(() => Promise.reject(new Error('Can\'t calculate\\')));


};
asyncSum(asyncNumber1, asyncNumber2, asyncNumber3);

