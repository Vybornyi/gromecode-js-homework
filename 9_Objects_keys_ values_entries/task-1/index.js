function getAdults(obj) {
        return Object.entries(obj)
        .filter(prop => prop[1] >= 18)
        .map(name => name[0]);;
}
const users = {
    'john doe': 19,
    'Tom': 17,
    'Bob': 18,

};
console.log(getAdults(users));