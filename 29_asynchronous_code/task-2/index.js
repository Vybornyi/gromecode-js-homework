/**
 * @param {number} count
 * @param {number} period
 * @return {undefined}
 */
const pinger = (count, period) => {
  // put your code here
  let index = count;
  console.log('Ping');
  const interval = setInterval(() => {
    if (--index > 0) {
      console.log('Ping');
    } else {
      clearInterval(interval);
    }
  }, period);
};

// examples
pinger(5, 1000); // makes 5 writes with 100 ms interval
