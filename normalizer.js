const normalizeUrl = (url) => {
  if (url.startsWith('https://')) {
    return url;
  } else if (!url.startsWith('https://')) {
    return 'https://' + url;
  };
};

console.log(normalizeUrl('google.com'))
