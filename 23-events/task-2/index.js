const getArray = (from, to) => {
  const arrayLength = to - from + 1;
  return [...new Array(arrayLength)].map((_, index) => from + index);
};
const getSectorseats = () => {
  return getArray(1, 10)
    .map(el => `<div class="sector__seat" data-number-seat="${el}"></div>`)
    .join('');
};
const getSectorLines = () => {
  const seatsText = getSectorseats();
  return getArray(1, 10)
    .map(el => `<div class="sector__line" data-number-line="${el}">${seatsText}</div>`)
    .join('');
};
const arenaElem = document.querySelector('.arena');
const renderArena = () => {
  const linesString = getSectorLines();
  const sectorText = getArray(1, 3)
    .map(el => `<div class="sector" data-number-sector="${el}">${getSectorLines()}</div>`)
    .join('');
  arenaElem.innerHTML = sectorText;
};
const selectSeat = event => {
  const isSeat = event.target.classList.contains('sector__seat');
  if (!isSeat) {
    return;
  }
  const seatNumber = event.target.dataset.numberSeat;
  const lineNumber = event.target.closest('.sector__line').dataset.numberLine;
  const sectorNumber = event.target.closest('.sector').dataset.numberSector;
  const board = document.querySelector('.board__selected-seat');
  board.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};
arenaElem.addEventListener('click', selectSeat);
renderArena();
