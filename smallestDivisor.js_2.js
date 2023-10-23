const smallestDivisor = (num) => {
  if (num === 1) return 1;
  let nan = NaN
  if (num < 1) return nan;

  let i = 1;

  while (i <= num) {
    i++
    let result = num % i;
    if (result === 0) return i;
  }
}



console.log(smallestDivisor(9))
console.log(smallestDivisor(17))
console.log(smallestDivisor(1))
console.log(smallestDivisor(0))