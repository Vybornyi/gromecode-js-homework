function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}
const user = {
  name: 'david',
  sayHi() {
    console.log(`hi ${this.name}`);
  },
};
const a = defer(user.sayHi, 2000);
a.call({ name: 'bob' });
