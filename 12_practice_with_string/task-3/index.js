function cleanTransactionsList(transactions) {
    const transactionsWithoutLetters = transactions.filter(element => !/[a-zA-Z]/.test(element));
    const clearTransactions = transactionsWithoutLetters.map(el => '$' + parseFloat(el).toFixed(2));
    return clearTransactions;
}
const arr = [' 1.9', '16.4', 13, 'sdgdgs', ' 1 dollar'];

console.log(cleanTransactionsList(arr));
console.log(arr);
