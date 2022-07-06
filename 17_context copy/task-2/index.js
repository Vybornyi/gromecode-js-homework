const wallet = {
  transactions: [1, 3, 5, 65, 8],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};
console.log(wallet.getMax());
