const getNumberExplanation = (number) => {
  switch (number) {
    case 666:
      return 'devil number';
    case 7:
      return 'prime number';
    case 42:
      return 'answer for everything';
    default:
      return null;
  }
};



console.log(getNumberExplanation(666));
console.log(getNumberExplanation(7));
console.log(getNumberExplanation(42));
