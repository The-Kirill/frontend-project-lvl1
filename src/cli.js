import readlineSync from 'readline-sync';

const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${yourName}!`);
};
export default greetingUser;
