const creareBtn = document.querySelector('.create-btn');
const creareBtnFunc = () => {
  alert('done');
};
const creareBtnClick = creareBtnFunc.bind(null);
creareBtn.addEventListener('click', creareBtnClick);
