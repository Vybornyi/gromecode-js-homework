function finishList() {
  const lastListItem = document.createElement('li');
  lastListItem.textContent = '8';
  document.querySelector('.list').append(lastListItem);
  const firstListItem = document.createElement('li');
  firstListItem.textContent = '1';
  document.querySelector('.list').prepend(firstListItem);
  const fourthListItem = document.createElement('li');
  fourthListItem.textContent = '4';
  document.querySelector('.special').before(fourthListItem);
  const sixthListItem = document.createElement('li');
  sixthListItem.textContent = '6';
  document.querySelector('.special').after(sixthListItem);
}
finishList();
