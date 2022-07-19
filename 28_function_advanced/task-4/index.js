const compose =
  (...funcs) =>
    value => {
      return funcs.reduce((acc, func) => func(acc), value);
    };

const add = value => value + 2;
const square = value => value * value;
const half = value => value / 2;

const compare = compose(add, square, half);
console.log(compare(2));
