import getRandomIntInclusive from '../randomNumber.js';

const rule = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  let operator = '';
  const randomIndexOperators = getRandomIntInclusive(0, 2);
  operator = operators[randomIndexOperators];
  return operator;
};

const getCalculate = () => {
  const randomNumberOne = getRandomIntInclusive(1, 50);
  const randomNumberTwo = getRandomIntInclusive(1, 50);
  const randomOperator = getRandomOperator();
  const question = `${randomNumberOne}${randomOperator}${randomNumberTwo}`;
  let correctAnswer;
  switch (randomOperator) {
    case '+':
      correctAnswer = randomNumberOne + randomNumberTwo;
      break;
    case '-':
      correctAnswer = randomNumberOne - randomNumberTwo;
      break;
    case '*':
      correctAnswer = randomNumberOne * randomNumberTwo;
      break;
    // no default
  }
  return [question, String(correctAnswer)];
};
export { rule, getCalculate };
