const isPrime = (num) => {
  for (i = 1; i <= num; i++) {
    if (num % 1 === 0 && num % num === 0) {
      return true;
    } else {
      return false;
    }
  }
};


console.log(isPrime(1));
console.log(isPrime(7));
console.log(isPrime(10));
