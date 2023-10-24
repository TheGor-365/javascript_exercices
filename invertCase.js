const invertCase = (string) => {
  const letters = string.split('');
  const result = [];

  const isLowerCase = (letter) => { return letter === letter.toLowerCase() };
  const isUpperCase = (letter) => { return letter === letter.toUpperCase() };

  for (let letter of letters) {
    if (isLowerCase(letter)) {
      result.push(letter.toUpperCase())
    } else if (isUpperCase(letter)) {
      result.push(letter.toLowerCase())
    } else {
      result.push(letter)
    }
  };

  return result.join('');
};


console.log(invertCase('Hello, World!'));
console.log(invertCase('I loVe JS'));