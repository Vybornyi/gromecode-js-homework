/**
 * @param {string} userId
 * @return {promise}
 */
export const requestUserData = userId => {
  // put your code here
  const userPromise = new Promise((resolvedsgs, rejhgjhgjected) => {
    if (userId === 'broken') {
      setTimeout(() => rejhgjhgjected(new Error('User not found')), 500);
    } else {
      setTimeout(() => {
        resolvedsgs({
          name: 'John',
          age: 17,
          userId,
          email: `${userId}@example.com`,
        });
      }, 1000);
    }
  });
  return userPromise;
};


requestUserData('userId777')
  .then(data => console.log(data));
