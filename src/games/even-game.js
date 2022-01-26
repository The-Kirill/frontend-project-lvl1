/* eslint-disable no-shadow */
import readlineSync from 'readline-sync';
import getRandomIntInclusive from '../randomNumber.js';

const getCorrectAnswerAndQuestion = () => {
  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const roundCounter = 4;
  for (let i = 0; i < roundCounter; i += 1) {
    const min = 1;
    const max = 50;
    const num = getRandomIntInclusive(min, max);
    const isEven = (num) => num % 2 === 0;
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const yourAnswer = readlineSync.question('Yor answer: ');
    if (correctAnswer !== yourAnswer) {
      console.log(`Let's try again, ${yourName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${yourName}`);
};
export default getCorrectAnswerAndQuestion;
