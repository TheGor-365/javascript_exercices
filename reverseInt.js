const reverseInt = (number) => {
  let string = number.toString();
  let charList = string.split('');

  while (charList[charList.length - 1] === '0') {
    charList.pop();
  }

  if (charList[0] === '-') {
    charList.reverse().join('');
    charList.splice(0, -1, '-');
    charList.pop();
  } else {
    charList.reverse().join('');
  }

  return parseInt(charList.join(''));
};

export default reverseInt;


console.log(reverseInt(12));
console.log(reverseInt(-122));
console.log(reverseInt(8900));
