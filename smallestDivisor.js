const smallestDivisor = (num) => {
  if (num === 1) return 1;

  for (let i = 2; i <= num; i++) {
    let result = num % i;
    if (result === 0) return i;
  }
}

console.log(smallestDivisor(9))
console.log(smallestDivisor(17))
console.log(smallestDivisor(1))






