const fizzBuzz = (start, end) => {
  const result = [];
  const list = Array.from({length: end - start + 1}, (_, a) => a + start);
  console.log(list);

  if (start <= end) {
    for (const number of list) {
      if (number % 3 === 0 && number % 5 === 0) {
        result.push("FizzBuzz");
      } else if (number % 3 === 0) {
        result.push("Fizz");
      } else if (number % 5 === 0) {
        result.push("Buzz");
      } else {
        result.push(number);
      }
    }
    console.log(result.join('\n'));
  } else {
    false
  }
};


console.log('1 - 30')
fizzBuzz(1, 30);
console.log('41 - 60')
fizzBuzz(41, 60);
console.log('77 - 97')
fizzBuzz(77, 97);
console.log('45 - 45')
fizzBuzz(45, 45);
console.log('35 - 25')
fizzBuzz(35, 25);
console.log('35')
fizzBuzz(35);