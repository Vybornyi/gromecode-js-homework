const textInput = document.querySelector('.text-input');
const consoleTextInputFunc = () => {
  const result = textInput.value;
  console.log(result);
};
const consoleTextInput = consoleTextInputFunc.bind(null);
textInput.addEventListener('change', consoleTextInput);
