import getRandomNumber from '../utils.js'

const description
= 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isSimple = (n) => {
  if (n < 2) {
    return false
  }
  if (n === 2) {
    return true
  }
  if (n % 2 === 0) {
    return false
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

const generateRound = () => {
  const question = getRandomNumber(1, 100)
  const correctAnswer = isSimple(question) ? 'yes' : 'no'
  return {
    question: question.toString(),
    correctAnswer,
  }
}

export { description, generateRound }
