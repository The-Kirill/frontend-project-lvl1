import readlineSync from 'readline-sync';

const startGame = (rule, getRaundData) => {
  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  console.log(rule);
  const roundCounter = 3;
  for (let i = 0; i < roundCounter; i += 1) {
    const [question, correctAnswer] = getRaundData();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Yor answer: ');
    if (correctAnswer !== yourAnswer) {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${yourName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${yourName}!`);
};
export default startGame;
