const mySubstr = (string, length) => {
  let resultString = '';
  let i = 0;
  
  while (i < length) {
    resultString += string[i];
    i += 1;
  }

  return resultString;
};
