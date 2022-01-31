/* eslint-disable no-shadow */
import getRandomIntInclusive from '../randomNumber.js';

const isEven = (num) => num % 2 === 0;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswerAndQuestion = () => {
  const question = getRandomIntInclusive(1, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export { rule, getCorrectAnswerAndQuestion };
