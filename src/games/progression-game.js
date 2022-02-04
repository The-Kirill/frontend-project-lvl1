import getRandomIntInclusive from '../randomNumber.js';

const rule = 'What number is missing in the progression?';

const getRandomArray = () => {
  const getRandomNumber = getRandomIntInclusive(2, 5);
  const array = [];
  let temp = 0;
  for (let i = getRandomNumber; i <= 15; i += 1) {
    temp += getRandomNumber;
    array.push(temp);
  }
  return array;
};

const getCorrectAnswerAndQuestion = () => {
  const randomIndex = getRandomIntInclusive(0, 10);
  const question = getRandomArray();
  const correctAnswer = question[randomIndex];
  question[randomIndex] = '..';
  return [String(question.join(' ')), String(correctAnswer)];
};
export { rule, getCorrectAnswerAndQuestion };
