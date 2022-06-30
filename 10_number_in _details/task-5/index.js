function getTotalPrice(arr) {
    return `$${Math.floor(arr.reduce((a, b) => a + b, 0) * 100) / 100}`;
}

const price = [1.23, 5.22134, 4.2312, 94.2344];
console.log(getTotalPrice(price));