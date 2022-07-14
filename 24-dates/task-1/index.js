function dayOfWeek(date, days) {
  const arr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
  const copyDate = new Date(date);
  const daysOfDate = new Date(copyDate).getDate();
  const futureDate = copyDate.setDate(days + daysOfDate);
  return arr[new Date(futureDate).getDay()];
}
