function f_Factorial (x) {
  if (x == 0 || x == 1) return 1;
  else return (x + f_Factorial (x - 1));
}

console.log(f_Factorial(7));
