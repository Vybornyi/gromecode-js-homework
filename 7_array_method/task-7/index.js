function increaseEvenEl(arr, delta) {
    return !Array.isArray(arr) ? null
        : arr.map(num => (num % 2 === 0 ? num + delta : num));
}


let arrF = [1, 4, 6, 7, 2];
let arrB = 20;
console.log(increaseEvenEl(arrF, arrB));
console.log(arrF);