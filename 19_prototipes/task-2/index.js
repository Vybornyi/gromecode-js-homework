function getOwnProps(object) {
  return Object.keys(object).filter(prop => typeof object[prop] !== 'function');
}
const ship = {
  name: 'dsf',
  age: 'sdg',

  startMachine() {
    console.log(`${this.name} liftind anchor up`);
    this.move();
  },
  stopMachine() {
    this.stop();
    console.log(`${this.name} liftind anchor down`);
  },
};
console.log(getOwnProps(ship));
console.log(typeof ship.startMachine);
