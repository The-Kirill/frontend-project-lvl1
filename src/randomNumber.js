const getRandomIntInclusive = (minNumber, maxNumber) => {
  const minNum = Math.ceil(minNumber);
  const maxNum = Math.floor(maxNumber);
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};
export default getRandomIntInclusive;
