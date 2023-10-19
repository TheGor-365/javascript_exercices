const square = (num) => num**2
const sumOfSquares = (num1, num2) => square(num1) + square(num2)
const squareSumOfSquares = (num1, num2) => square(sumOfSquares(num1, num2))