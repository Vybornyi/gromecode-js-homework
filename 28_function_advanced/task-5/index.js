const shmoment = initValue => {
  let result = new Date(initValue);

  const methods = {
    add(value, number) {
      let newValue;
      if (value === 'years') {
        result = result.setFullYear(result.getFullYear() + number);
      } else if (value === 'months') {
        newValue = result.setMonth(result.getMonth() + number);
      } else if (value === 'days') {
        newValue = result.setDay(result.getDay() + number);
      } else if (value === 'hours') {
        newValue = result.setHours(result.getHours() + number);
      } else if (value === 'minutes') {
        newValue = result.setMinutes(result.getMinutes() + number);
      } else if (value === 'seconds') {
        newValue = result.setSeconds(result.getSeconds() + number);
      } else if (value === 'milliseconds') {
        newValue = result.setMilliseconds(result.getMilliseconds() + number);
      }
      result = newValue;
      return this;
    },

    subtract(value, number) {
      let newValue;
      if (value === 'years') {
        newValue = result.setFullYear(result.getFullYear() - number);
      } else if (value === 'months') {
        newValue = result.setMonth(result.getMonth() - number);
      } else if (value === 'days') {
        newValue = result.setDay(result.getDay() - number);
      } else if (value === 'hours') {
        newValue = result.setHours(result.getHours() - number);
      } else if (value === 'minutes') {
        newValue = result.setMinutes(result.getMinutes() - number);
      } else if (value === 'seconds') {
        newValue = result.setSeconds(result.getSeconds() - number);
      } else if (value === 'milliseconds') {
        newValue = result.setMilliseconds(result.getMilliseconds() - number);
      }
      result = newValue;
      return this;
    },

    result() {
      return new Date(result);
    },
  };
  return methods;
};
console.log(shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('years', 10).result());
