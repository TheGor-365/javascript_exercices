const capitalize = (word) => {
  return word.slice(0, 1).toUpperCase() + word.slice(1, word.length);
};

console.log(capitalize('wikipedia'))
