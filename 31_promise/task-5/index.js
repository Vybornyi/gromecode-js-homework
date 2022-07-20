const delay = (time) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log('Done'));
    }, time);
  });
  return promise;
};
delay(3000);