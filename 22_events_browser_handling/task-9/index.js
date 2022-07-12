const checkbox = document.querySelector('.task-status');

const consoleCheckboxStatusFunc = event => {
  console.log(event.target.checked);
};
const consoleCheckboxStatus = consoleCheckboxStatusFunc.bind(null);
checkbox.addEventListener('change', consoleCheckboxStatus);
