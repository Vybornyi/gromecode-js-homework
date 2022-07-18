/* import { getItem, setItem } from './storage.js';
import { renderTasks } from './rendered.js';

export const btnAddTask = () => {
  const taskInput = document.querySelector('.task-input');
  const listElem = document.querySelector('.list');
  const text = taskInput.value;

  if (text.length === 0) {
    return;
  }
  const tasksList = getItem('taskList') || [];
  const newTaskList = tasksList.concat({
    text,
    done: false,
    id: Math.random().toString(),
  });

  setItem('tasksList', newTaskList);
  console.log(newTaskList);
}; */

import { renderTasks } from './rendered.js';
import { getItem, setItem } from './storage.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
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
  setItem('taskList', newTaskList);

  renderTasks();
};
