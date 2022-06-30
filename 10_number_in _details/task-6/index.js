//1.create emty array with lenghts
//2.use map to arr to create a array numbers with Math.random and rounded them

const getRandomNumbers = (length, from, to) => {
    // put your code here
   if (to - from < 1 ){
    return null;
   }
    const min = Math.round(from);
    const max = Math.ceil(to);
    return [...new Array(length)].map(() => Math.floor(Math.random() * (max - min) + min));
};

// examples
console.log(getRandomNumbers(5, -1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]



