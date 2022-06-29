function cloneArr(arr) {
    return !Array.isArray(arr) ? null
        : arr.concat();
}
let arrFirst = [1, 5, 6, "hello", [1, 5, 'sim'], {name: 'Ivan'}];
console.log(cloneArr(arrFirst));
console.log(arrFirst.map((x) => x));