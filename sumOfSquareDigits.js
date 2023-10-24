const sumOfSquareDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  
  for (let i = 0; i < numAsStr.length; i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};