import readlineSync from 'readline-sync';

const startGame = (getRaunData) => {
  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const roundCounter = 3;
  for (let i = 0; i < roundCounter; i += 1) {
    const [questionNum, correctAnswer] = getRaunData();
    console.log(`Question: ${questionNum}`);
    const yourAnswer = readlineSync.question('Yor answer: ');
    if (correctAnswer !== yourAnswer) {
      console.log(`Let's try again, ${yourName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${yourName}`);
};
export default startGame;
