/* const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
  { text: 'Buy bread', done: false },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('data-id', index);
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const selectButtonInput = document.querySelector('.create-task-btn');

function onCreateTask(event) {
  const taskInputField = document.querySelector('.task-input');
  const inputFieldValue = taskInputField.value;
  if (inputFieldValue === '') {
    return;
  }
  tasks.unshift({ text: inputFieldValue, done: false });

  taskInputField.value = '';
  taskInputField.innerHTML = '';
  listElem.innerHTML = '';

  renderTasks(tasks);
}

selectButtonInput.addEventListener('click', onCreateTask);

function onChangeCheckbox(event) {
  const checkbox = event.target.classList.contains('list__item-checkbox');
  if (!checkbox) {
    return;
  }
  const checkBoxId = event.target.dataset.id;

  tasks[checkBoxId].done = true;

  if (!event.target.checked) {
    tasks[checkBoxId].done = false;
  }

  renderTasks(tasks);
}

listElem.addEventListener('click', onChangeCheckbox); */

import { renderTasks } from './rendered.js';
import { initTodoListHandlers } from './todoList.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});
