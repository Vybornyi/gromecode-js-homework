function getGreenwichTime(date) {
  const copyDate = new Date(date);
  const formatter = new Intl.DateTimeFormat('en', {
    timeZone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const gettime = date => formatter.format(date);
  return gettime(copyDate);
}
console.log(getGreenwichTime(new Date()));
