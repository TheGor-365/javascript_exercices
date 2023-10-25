export default (filepath, data, cb) => {
  fs.writeFile(filepath, data, cb);
};