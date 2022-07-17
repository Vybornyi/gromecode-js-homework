import { getItem, setItem } from './storage.js';
import { renderTasks } from './rendered.js';

export const btnAddTask = () => {
  const taskInput = document.querySelector('.task-input');
  const listElem = document.querySelector('.list');
  const inputValue = taskInput.value;
  if (inputValue.length === 0) {
    return;
  }
  const tasksList = getItem('taskList') || [];
  const newTaskList = tasksList.concat({
    inputValue,
    done: false,
    id: Math.random().toString(),
  });
  setItem('tasksList', newTaskList);
  taskInput.value = '';
  listElem.innerHTML = '';
  renderTasks();
};

/* import { renderTasks } from './rendered.js';
import { getItem, setItem } from './storage';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task - input');
  const text = taskTitleInputElem.value;
  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';
  const tasksList = getItem('taskList') || [];
  const newTaskList = tasksList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });
  setItem('tasksList', newTaskList);
  renderTasks();
};
 */
