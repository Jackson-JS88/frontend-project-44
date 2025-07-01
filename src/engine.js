import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const ROUNDS_COUNT = 3;

const runEngine = (description, generateRound) => {
  const userName = greetUser();
  console.log(description);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const { question, correctAnswer } = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEngine;