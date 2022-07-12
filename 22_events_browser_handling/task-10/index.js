const btnSelectAll = document.querySelectorAll('.pagination__page');
const handleClickFunc = event => {
  console.log(event.target.dataset.pageNumber);
};
const handleClick = handleClickFunc.bind(null);
btnSelectAll.forEach(el => el.addEventListener('click', handleClick));
