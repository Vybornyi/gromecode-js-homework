/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

/* const concatProps = obj => {
    // put your code here
    let res = [];
    for (let prop in obj) {
        res = res.concat(obj[prop]);
    } return res;
};

// examples
concatProps({ name: 'John Doe', age: 17, interest: 'football' }); // ==> ['John Doe', 17, 'football']
 */

const a = {};
const b = 3;
const c = {
    name: 'Ivan',
    age: 13,
};
const d = {
    name: 'Igor',
    age: 3,
};
Object.assign(a, { [b]: c });
Object.assign(a, { [b]: d });
console.log(a);
