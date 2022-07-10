const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = tasksList => {
  // put your code here
  const listElem = document.querySelector('.list');

  const listItemsElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const chexboxElem = document.createElement('input');
      chexboxElem.setAttribute('type', 'checkbox');

      chexboxElem.checked = done;
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      chexboxElem.classList.add('.list__item-checkbox');
      listItemElem.append(chexboxElem, text);

      return listItemElem;
    });
  listElem.append(...listItemsElems);
};
renderTasks(tasks);
