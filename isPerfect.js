const isPerfect = (number) => {
  let result;
  let sum = 0;
  const list = [];

  if (number > 0) {
    for (let i = 1; i < number; i++) {
      result = number / i;
      if (Number.isInteger(result)) list.push(i);
    }
  }

  for (const index in list) {
    sum += list[index];
  }

  return number > 0 && number === sum;
}



console.log('Should be true')
console.log(isPerfect(6));
console.log(isPerfect(28));
console.log(isPerfect(496));
console.log(isPerfect(8128));


console.log('Should be false')
console.log(isPerfect(-6));
console.log(isPerfect(-28));
console.log(isPerfect(44));
console.log(isPerfect(0));
console.log(isPerfect(10));
