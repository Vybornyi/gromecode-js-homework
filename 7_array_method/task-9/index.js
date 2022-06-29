'use strict';

const withdraw = (clients, balances, client, amount) => {
    if (balances[clients.indexOf(client)] >= amount) {
        balances[clients.indexOf(client)] = balances[clients.indexOf(client)] - amount;
        return balances[clients.indexOf(client)];
    } return -1;

};

//example 1:

//input
let balancesOfClient = [1400, 87, -6];
console.log(withdraw(['Ann', 'John', 'User'], balancesOfClient, 'John', 87));
console.log(balancesOfClient);

//output
//37
//и массив balances должен быть [1400, 37, -6]



//example 2:

//input
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

//output
//-1
//и массив balances должен быть [1400, 87, -6]