export const getMinSquaredNumber = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const sortArr = arr.sort((a, b) => a - b);
  return Math.abs(sortArr[0] * sortArr[0]);
};
