const replace = el => el.replace(/\s+/g, '');

function cleanTransactionsList(transactionsArr) {
    const containsAnyLetter = str => /[a-zA-Z]/.test(str);
    const copyArr = transactionsArr.slice(0);
    const filtAnyLetter = copyArr.filter(el => !containsAnyLetter(el));
    return filtAnyLetter.map(el => `$${parseFloat(el).toFixed(2)}`);
}
const arr = [' 1.9', '16.4', 13, 'sdgdgs', ' 1 dollar'];
console.log(arr.map(el => String(el).trim()));
console.log(cleanTransactionsList(arrS));
console.log(arrS);
