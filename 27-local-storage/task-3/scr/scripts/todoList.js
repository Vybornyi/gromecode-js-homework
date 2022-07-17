import { changeClassFunc } from './updateTask.js';
import { btnAddTask } from './createTask';

export const initTodoListHandlers = () => {
  const createBtn = document.querySelector('.create-task-btn');
  createBtn.addEventListener('click', btnAddTask);

  const listElem = document.querySelector('.list');
  const changeClass = changeClassFunc.bind(null);
  listElem.addEventListener('click', changeClass);
};
