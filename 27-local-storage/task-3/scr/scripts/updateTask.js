import { getItem, setItem } from './storage.js';
import { renderTasks } from './rendered.js';

const listElem = document.querySelector('.list');

export const changeClassFunc = e => {
  const isCheckBox = e.target.classList.contains('');

  if (!isCheckBox) {
    return;
  }
  const taskslist = getItem('taskList');
  const newTasksList = taskslist.map(task => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;
      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }
    return task;
  });
  setItem('tasksList', newTasksList);
  renderTasks();
};

/* import { renderTasks } from './rendered.js';
import { getItem, setItem } from './storage';

export const onToggleTask = e => {
  const isCheckBox = e.target.classList.contains('');

  if (!isCheckBox) {
    return;
  }
  const taskslist = getItem('taskList');
  const newTasksList = taskslist.map(task => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;
      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }
    return task;
  });
  setItem('tasksList', newTasksList);
  renderTasks();
};
 */
