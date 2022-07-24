const servers = [
  'https://server.com/ua',
  'https://server.com/eu',
  'https://server.com/au'
];

const request = url => {
  return new Promise(resolve => {
    const getRandomNumber = (from, to) => {
      return from + Math.random() * (to - from);
    };
    const randomDelay = getRandomNumber(1000, 3000);
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, randomDelay);
  });
};
const getUserASAP = userId => {
  const UserUrls = servers
    .map(url => `${url}/${userId}`);

  const requests = UserUrls.map(userUrl => request(userUrl));

  return Promise.race(requests);
};
getUserASAP('sfsd').then(data => console.log(data));
