const getRandomIntInclusive = () => {
  const minNum = Math.ceil(1);
  const maxNum = Math.floor(100);
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};
export default getRandomIntInclusive;
