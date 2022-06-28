const sortDesk = numbers =>{
    return numbers.slice().sort((a,b)=>b-a);
};
let arrNumbers=[1,4,5,6,22,4];
console.log(sortDesk(arrNumbers));
console.log(arrNumbers);