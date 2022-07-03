export const reverseArray = numbers => (!Array.isArray(numbers) ? null : numbers.slice().reverse());
console.log(reverseArray([1, 4, 7, 45, 20]));

export const withdraw = (clients, balances, client, amount) => {
  if (balances[clients.indexOf(client)] >= amount) {
    balances[clients.indexOf(client)] = balances[clients.indexOf(client)] - amount;
    return balances[clients.indexOf(client)];
  }
  return -1;
};

export const getAdults = obj => {
  // put your code here
  const result = {};
  for (const prop in obj) {
    if (obj[prop] >= 18) {
      result[prop] = obj[prop];
    }
  }
  return result;
};
