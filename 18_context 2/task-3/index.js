function sumOfSquares() {
  return [...arguments].reduce((sum, num) => {
    return sum + num * num;
  }, 0);
}
console.log(sumOfSquares(4, 6));
