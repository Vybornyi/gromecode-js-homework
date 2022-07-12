const btnEl = document.querySelector('.single-use-btn');
function consClick() {
  console.log('clicked');
  btnEl.removeEventListener('click', consBtnClick);
}
const consBtnClick = consClick.bind(null);
btnEl.addEventListener('click', consBtnClick);
