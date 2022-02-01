import getRandomIntInclusive from '../randomNumber.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const getCorrectAnswerAndQuestion = () => {
  const num1 = getRandomIntInclusive(1, 50);
  const num2 = getRandomIntInclusive(1, 50);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);
  return [question, String(correctAnswer)];
};
export { rule, getCorrectAnswerAndQuestion };
