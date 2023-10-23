const fibonacci1 = (num) => {
  let num1 = 0;
  let num2 = 1;
  let sum;
  let i = 0;

  for (i = 0; i < num; i++) {
    sum  = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return num2;
}

console.log('fibonacci1');
console.log(fibonacci1(0));
console.log(fibonacci1(1));
console.log(fibonacci1(2));
console.log(fibonacci1(3));
console.log(fibonacci1(4));
console.log(fibonacci1(5));
console.log(fibonacci1(10));





const fibonacci2 = (num) => {
  if (num == 1) return 0;
  if (num == 2) return 1;

  let num1 = 0;
  let num2 = 1;
  let sum;
  let i = 2;

  while (i < num) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    i += 1;
  }
  return num2;
}

console.log('fibonacci2');
console.log(fibonacci2(0));
console.log(fibonacci2(1));
console.log(fibonacci2(2));
console.log(fibonacci2(3));
console.log(fibonacci2(4));
console.log(fibonacci2(5));
console.log(fibonacci2(10));






const fibonacci3 = (num) => {
  if (num == 0) return 0;
  if (num == 1) return 1;

  return fibonacci3(num - 1) + fibonacci3(num - 2);
}

console.log('fibonacci3');
console.log(fibonacci3(0));
console.log(fibonacci3(1));
console.log(fibonacci3(2));
console.log(fibonacci3(3));
console.log(fibonacci3(4));
console.log(fibonacci3(5));
console.log(fibonacci3(10));





const fibonacci4 = number => {
  let num1 = 0, num2 = 1, result = number;
  
  for(let i = 2; i <= number; i++) {
    result = num1 + num2;
    num1 = num2;
    num2 = result;
  }
  
  return result;
};

console.log('fibonacci4');
console.log(fibonacci4(0));
console.log(fibonacci4(1));
console.log(fibonacci4(2));
console.log(fibonacci4(3));
console.log(fibonacci4(4));
console.log(fibonacci4(5));
console.log(fibonacci4(10));





const fibonacci5 = (n) => {
  if (n <= 1) return n;

  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 2] + result[i - 1];
  }

  return result[result.length - 1];
}

console.log('fibonacci5');
console.log(fibonacci5(0));
console.log(fibonacci5(1));
console.log(fibonacci5(2));
console.log(fibonacci5(3));
console.log(fibonacci5(4));
console.log(fibonacci5(5));
console.log(fibonacci5(10));