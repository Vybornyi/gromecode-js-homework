function getFiniteNumbers(arr) {
    return arr.filter(number => Number.isFinite(number));
}

function getFiniteNumbersV2(arr) {
    return arr.filter(number => isFinite(number));
}

function getNaN(arr) {
    return arr.filter(number => Number.isNaN(number));
}

function getNaNV2(arr) {
    return arr.filter(number =>isNaN(number));
}

function getIntegers(arr) {
    return arr.filter(number => Number.isInteger(number));
}
