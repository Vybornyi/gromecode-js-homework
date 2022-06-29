const user = {
    name: 'Tom',
    age: 17,
};

/* присвой объекту свойство hobby со значением 'football' с помощью точки */
user.hobby = 'football';

const anotherKey = 'married';
/* название свойства хранится в переменной anotherKey. Присвой объекту такое свойство со значением false */
user[anotherKey] = false;

/* присвой объекту свойство 'favorite music' со значением 'rock' */
user['favorite music'] = 'rock';
/* присвой объекту свойство 'address', которое будет пустым объкетом */
user.address ={};

/* присвой объекту в 'address' свойство 'country', со значением 'Ukraine' */
user.address.country = 'Ukraine';
user.address.building = 17;
/* присвой объекту в 'address' свойство 'building', со значением 17 */
console.log(user);

/* выведи в консоль итоговый объект user */
