function getSection(num) {
  const spanEl = document.querySelector(`span[data-number="${num}"]`);
  return spanEl.closest('.box').dataset.section;
}
console.log(getSection(2));
