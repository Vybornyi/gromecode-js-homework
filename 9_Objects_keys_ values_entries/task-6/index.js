rooms = {
    room1: [
        { name: 'jack' },
        { name: 'dan' },
        { name: 'sdgf' },
        { name: 'dghfs' },
        { name: 'dsgh' },

    ],
    room2: [
        { name: 'jack' },
        { name: 'dan' },
        { name: 'sdgf' },
        { name: 'dghfs' },
        { name: 'dsgh' },

    ],
    room3: [
        { name: 'jack' },
        { name: 'dan' },
        { name: 'sdgf' },
        { name: 'dghfs' },
        { name: 'dsgh' },

    ],
};

function getPeople (obj){
   return Object.values(obj).flat().map(name=>name.name);
};

    

console.log(getPeople(rooms));