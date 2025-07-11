import getRandomNumber from '../utils.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = number => number % 2 === 0

const generateRound = () => {
  const question = getRandomNumber(1, 100)
  const correctAnswer = isEven(question) ? 'yes' : 'no'
  return {
    question: question.toString(),
    correctAnswer,
  }
}

export { description, generateRound }
