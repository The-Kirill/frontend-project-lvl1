/* eslint-disable no-shadow */
import getRandomIntInclusive from '../randomNumber.js';

const isEven = (num) => num % 2 === 0;

const getCorrectAnswerAndQuestion = () => {
  const questionNum = getRandomIntInclusive();
  const correctAnswer = isEven(questionNum) ? 'yes' : 'no';
  return [questionNum, correctAnswer];
};
export default getCorrectAnswerAndQuestion;
