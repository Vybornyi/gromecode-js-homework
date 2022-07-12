const btnEl = document.querySelector('.search__btn');
const consoleInputTextFunc = () => {
  const inputEl = document.querySelector('.search__input');
  const inputValue = inputEl.value;
  console.log(inputValue);
};
const consoleInputText = consoleInputTextFunc.bind(null);
btnEl.addEventListener('click', consoleInputText);
