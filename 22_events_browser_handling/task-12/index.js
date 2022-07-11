function squaredNumbers() {
  const listElemNumbers = document.querySelectorAll('.number');

  const array = Array.from(listElemNumbers);
  array.forEach(el => {
    const dataSquare = el.dataset.number ** 2;
    el.dataset.squaredNumber = dataSquare;
  });
}
squaredNumbers();
