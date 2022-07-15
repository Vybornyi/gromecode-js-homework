function getDiff(startDate, endDate) {
  const copyDateStart = new Date(startDate);
  const copyDateEnd = new Date(endDate);
  const diffTime = Math.abs(copyDateEnd - copyDateStart);
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diffTime / (1000 * 60 * 60)) - days * 24;
  const minutes = Math.floor(diffTime / (1000 * 60)) - days * 24 * 60 - hours * 60;
  const seconds =
    Math.floor(diffTime / 1000) - minutes * 60 - hours * 60 * 60 - days * 24 * 60 * 60;
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const date2 = new Date(2018, 4, 3, 15, 20);
const date1 = new Date(2018, 4, 3, 15, 30);
console.log(getDiff(date1, date2));
