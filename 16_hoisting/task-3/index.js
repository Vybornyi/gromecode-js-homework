/* eslint-disable */

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой задачи он отключен аннотацией eslint-disable */

function cleanTransactionList(transactions) {
  transactions = ["  1.9 ", "16.4", "17", " 1 dollar "];
  let transactionsWithoutLetters = transactions.filter((element) =>
    /[a-zA-Z]/.test(element)
  );
  console.log(transactionsWithoutLetters);
  let transaction = transactionsWithoutLetters.forEach((el) => "$" + (el.trim).toFixed(2));
  return transaction;
}
console.log(cleanTransactionList(["  1.9 ", "16.4", "17", " 1 dollar "]));
