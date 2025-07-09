import getRandomNumber from '../utils.js'

const description = 'What is the result of the expression?'

const operators = ['+', '-', '*']

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

const generateRound = () => {
  const num1 = getRandomNumber(1, 30)
  const num2 = getRandomNumber(1, 10)
  const operator = operators[getRandomNumber(0, operators.length - 1)]

  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer: calculate(num1, num2, operator).toString(),
  }
}

export { description, generateRound }
