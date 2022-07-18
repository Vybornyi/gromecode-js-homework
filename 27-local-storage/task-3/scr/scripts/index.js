import { renderTasks } from './rendered.js';
import { initTodoListHandlers } from './todoList.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});

const onStorageChange = e => {
  if (e.key === 'taskList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);
