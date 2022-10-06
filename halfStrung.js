const getHalfString = (str) => {
  let result = '';
  for (let i = 0; i < str.length / 2; i += 1) {
    result += str[i];
  }
  return result;
};
