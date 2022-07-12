const input = document.querySelector('.text-input');
const consoleInputTextFunc = event => {
  console.log(event.target.value);
};
const consoleInputText = consoleInputTextFunc.bind(null);
input.addEventListener('change', consoleInputText);
