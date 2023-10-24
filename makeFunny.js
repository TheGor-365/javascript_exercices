const makeItFunny = (string, number) => {
  let index = 0;
  let result = '';

  while (index < string.length) {
    const current = string[index];
    
    if ((index + 1) % number === 0) {
      result = `${result}${current.toUpperCase()}`;
    } else {
      result = `${result}${current}`;
    }
    index++;
  }

  return result;
};
