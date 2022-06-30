function getKeys(obj){
    Object.keys(obj).forEach(name=>console.log(name));
}
const users = {
    'john doe': 19,
    'Tom': 17,
    'Bob': 18,
};
getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });

