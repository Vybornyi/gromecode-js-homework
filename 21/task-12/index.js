/* function squaredNumbers() {
  const listElemNumbers = document.querySelectorAll('.number');

  const array = Array.from(listElemNumbers);
  array.forEach(el => {
    const dataSquare = el.dataset.number ** 2;
    el.dataset.squaredNumber = dataSquare;
  });
}
squaredNumbers();
 */
export function squaredNumbers() {
  const listItems = document.querySelector('li');
  const numbers = document.querySelector('.number');
  console.log(numbers);
  const number = +Object.values(numbers.dataset);
  const squaredNumber = number * number;
  listItems.setAttribute('data-squared-number', 'squaredNumber');
}
squaredNumbers();
