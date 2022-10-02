const isInternationalPhone = (num) => {
  return num.toString()[0] === '+'
}

console.log(isInternationalPhone('+79174568787'));
