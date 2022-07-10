class Wallet {
  constructor() {
    this.balanse = 0;
  }

  getBalance() {
    return this.balanse;
  }

  deposit(amount) {
    this.balanse += amount;
  }

  withdraw(amount) {
    if (amount > this.balanse) {
      console.log('No enough founds');
      return;
    }
    this.balanse -= amount;
  }
}
const wallet1 = new Wallet();
console.log(wallet1.getBalance());
wallet1.deposit(222);
console.log(wallet1.getBalance());
wallet1.withdraw(22);
console.log(wallet1.getBalance());
wallet1.withdraw(220);
console.log(wallet1.getBalance());
