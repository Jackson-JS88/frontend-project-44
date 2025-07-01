import getRandomNumber from '../utils.js';
import runEngine from '../engine.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;
  const question = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const runEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(description, generateRound);
};

export default runEvenGame;