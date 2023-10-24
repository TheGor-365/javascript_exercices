const sumOfSquareDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;

  for (let i = 0; i < numAsStr.length; i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};



const isHappyNumber = (number) => {
  const result = [];

  for (let i = 0; i < 10; i++) {
    result.push(sumOfSquareDigits(number^2));
    console.log(result);
  }
  
}



console.log(isHappyNumber(1));
console.log(isHappyNumber(7));
console.log(isHappyNumber(13));
console.log(isHappyNumber(0));
console.log(isHappyNumber(2));
console.log(isHappyNumber(90));


// 7   => 7^2 = 49,
// 49  => 4^2 + 9^2 = 16 + 81 = 97,
// 97  => 9^2 + 7^2 = 81 + 49 = 130,
// 130 => 1^2 + 3^2 + 0^2 = 10,
// 10  => 1^2 + 0^2 = 1.
