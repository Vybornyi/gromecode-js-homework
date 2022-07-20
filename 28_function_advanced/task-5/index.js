const shmoment = initValue => {
  let result = new Date(initValue);

  const methods = {
    add(value, number) {
      if (value === 'years') {
        result = new Date(result.setFullYear(result.getFullYear() + number));
      } else if (value === 'months') {
        result = new Date(result.setMonth(result.getMonth() + number));
      } else if (value === 'days') {
        result = new Date(result.setDate(result.getDate() + number));
      } else if (value === 'hours') {
        result = new Date(result.setHours(result.getHours() + number));
      } else if (value === 'minutes') {
        result = new Date(result.setMinutes(result.getMinutes() + number));
      } else if (value === 'seconds') {
        result = new Date(result.setSeconds(result.getSeconds() + number));
      } else if (value === 'milliseconds') {
        result = new Date(result.setMilliseconds(result.getMilliseconds() + number));
      }
      return this;
    },

    subtract(value, number) {
      if (value === 'years') {
        result = new Date(result.setFullYear(result.getFullYear() - number));
      } else if (value === 'months') {
        result = new Date(result.setMonth(result.getMonth() - number));
      } else if (value === 'days') {
        result = new Date(result.setDate(result.getDate() - number));
      } else if (value === 'hours') {
        result = new Date(result.setHours(result.getHours() - number));
      } else if (value === 'minutes') {
        result = new Date(result.setMinutes(result.getMinutes() - number));
      } else if (value === 'seconds') {
        result = new Date(result.setSeconds(result.getSeconds() - number));
      } else if (value === 'milliseconds') {
        result = new Date(result.setMilliseconds(result.getMilliseconds() - number));
      }
      return this;
    },

    result() {
      return result;
    },
  };
  return methods;
};
console.log(
  shmoment(new Date(2020, 0, 7, 17, 17, 17))
    .add('years', 10)
    .add('years', 10)
    .add('months', 10)
    .add('days', 10)
    .subtract('months', 10)
    .subtract('years', 10)
    .result(),
);
