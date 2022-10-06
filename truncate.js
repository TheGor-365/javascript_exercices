const truncate = (text, length) => {
  const result = `${text.slice(0, length)}...`;
  return result;
};

console.log(truncate('hello', 4))
