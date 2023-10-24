const joinNumbersFromRange = (start, finish) => {
  let result = '';

  while (start <= finish) {
    result = `${result}${start}`;
    start += 1;
  }

  return result;
};



console.log(joinNumbersFromRange(4, 90))