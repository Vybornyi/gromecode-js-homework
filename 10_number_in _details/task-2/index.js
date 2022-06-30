function getParsedIntegers(arr) {
    return arr.map(num => Number.parseInt(num));
}
const numbers = [1.34, 212.4223, 3423.9, -23.3, '237ss',72e7,'23'];
console.log(getParsedIntegers(numbers));


function getParsedIntegersV2(arr) {
    return arr.map(num => parseInt(num));
}

console.log(getParsedIntegersV2(numbers));

function getParsedFloat(arr) {
    return arr.map(num => Number.parseFloat(num));
}

console.log(getParsedFloat(numbers));

function getParsedFloatV2(arr) {
    return arr.map(num => parseFloat(num));
}

console.log(getParsedFloatV2(numbers));
