const counter = document.querySelector('.counter');
const counterValue = document.querySelector('.counter__value');
const onCounterChange = event => {
  const isButton = event.target.classList.contains('counter__btn');
  if (!isButton) {
    return;
  }

  const actionData = event.target.dataset.action;

  const oldValue = Number(counterValue.textContent);

  const newValue = actionData === 'decrease' ? oldValue - 1 : oldValue + 1;

  localStorage.setItem('counterValue', newValue);
  counterValue.textContent = newValue;
};
counter.addEventListener('click', onCounterChange);
const onStorageChange = event => {
  console.log(event);
  counterValue.textContent = event.newValue;
};
window.addEventListener('storage', onStorageChange);
const onDocumentLoaded = () => {
  counterValue.textContent = localStorage.getItem('counterValue');
};
document.addEventListener('DOMContentLoaded', onDocumentLoaded);
