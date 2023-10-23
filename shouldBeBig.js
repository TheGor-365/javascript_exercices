export default (str) => {
  let result = '';
  
  for (let i = 0; i < length(str); i += 1) {
    const shouldBeBig = (i === 0 || str[i - 1] === ' ');
    result += shouldBeBig ? toUpperCase(str[i]) : str[i];
  }

  return result;
};