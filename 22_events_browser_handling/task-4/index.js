const taskStatusEl = document.querySelector('.task-status');
const consoleTaskStatusFunc = () => {
  console.log(taskStatusEl.checked);
};
const consoleTaskStatus = consoleTaskStatusFunc.bind(null);
taskStatusEl.addEventListener('change', consoleTaskStatus);
