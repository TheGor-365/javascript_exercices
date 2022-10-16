export const parseJson = (json) => {
  try {
    return JSON.parse(json);
  } catch (e) {
    throw new ParseError('Invalid JSON string');
  }
};
